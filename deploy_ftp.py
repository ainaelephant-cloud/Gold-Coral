"""Despliegue FTP a goldcoral.vip (uso local; credenciales desde ACCESO-FTP.md)."""
import ftplib, os, sys, io, re

ROOT = os.path.dirname(os.path.abspath(__file__))
HOST = "ftp.goldcoral.vip"
USER = "ftp.goldcoral.vip"
PORT = 21

# Lee la contraseña del fichero local (no se hardcodea aquí)
cred_txt = open(os.path.join(ROOT, "ACCESO-FTP.md"), encoding="utf-8").read()
m = re.search(r"Contrase\xf1a\s*\|\s*`([^`]+)`", cred_txt)
PASS = m.group(1)

REMOTE_BASE = "/public"
BACKUP_DIR = os.path.join(ROOT, "_backup_ftp_20260608")

# Archivos a desplegar (rutas relativas a la raíz del proyecto = raíz /public)
FILES = [
    "index.html",
    "acceso.html",
    "area.html",
    "sw.js",
    "styles/styles.css",
    "styles/area.css",
    "scripts/script.js",
    "scripts/supabase-config.js",
    "sections/header.html",
    "sections/home.html",
    "sections/about-us.html",
    "sections/descargas.html",
    "sections/contacto.html",
    "sections/footer.html",
    "aviso-legal.html",
    "politica-privacidad.html",
    "terminos-condiciones.html",
    "sitemap.xml",
]

ftp = ftplib.FTP()
ftp.connect(HOST, PORT, timeout=60)
ftp.login(USER, PASS)
print("Conectado a", HOST)

# 1) Backup de las versiones actuales en producción
os.makedirs(BACKUP_DIR, exist_ok=True)
for rel in FILES:
    remote = f"{REMOTE_BASE}/{rel}"
    local_bak = os.path.join(BACKUP_DIR, rel.replace("/", "__"))
    buf = io.BytesIO()
    try:
        ftp.retrbinary(f"RETR {remote}", buf.write)
        open(local_bak, "wb").write(buf.getvalue())
        print(f"  backup  {rel}  ({len(buf.getvalue())} bytes)")
    except ftplib.error_perm as e:
        print(f"  (sin backup, no existía) {rel}: {e}")

# 2) Subida de los nuevos archivos
print("--- subiendo ---")
for rel in FILES:
    local = os.path.join(ROOT, rel)
    remote = f"{REMOTE_BASE}/{rel}"
    with open(local, "rb") as f:
        ftp.storbinary(f"STOR {remote}", f)
    print(f"  subido   {rel}  ({os.path.getsize(local)} bytes)")

ftp.quit()
print("OK despliegue completado.")
