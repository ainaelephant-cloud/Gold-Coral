/* ===========================================================
   Gold Coral — configuración de Supabase (proyecto ainaelephant-cloud)
   La clave publishable es PÚBLICA por diseño: el acceso real
   lo protegen Supabase Auth + las políticas RLS del bucket,
   restringidas a los correos del equipo de Gold Coral.
   =========================================================== */
window.GOLDCORAL_SUPABASE = {
    url: "https://oskvfymumlyefoitzoee.supabase.co",
    key: "sb_publishable_R7XQ-ijoDW7SQUD56w4bkA_mFTM9hYi",
    bucket: "goldcoral-ficheros"
};

window.goldcoralClient = function () {
    var cfg = window.GOLDCORAL_SUPABASE;
    return window.supabase.createClient(cfg.url, cfg.key, {
        auth: { persistSession: true, autoRefreshToken: true }
    });
};
