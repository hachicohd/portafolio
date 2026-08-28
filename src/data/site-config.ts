export const siteConfig = {
    name: "BlueFIn",
    description: "Desarrollo de Sistemas Web B2B",
    contact: {
        // Formato E.164 (Ej: 584141234567 para Venezuela)
        whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "584000000000",
        message: encodeURIComponent("Hola, vi el portafolio de BlueFIn y quiero conversar sobre una página web para mi empresa."),
        instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://instagram.com/bluefin",
        email: "hola@bluefin.com" // Sustituir por el real o dejar vacío si no aplica
    }
};