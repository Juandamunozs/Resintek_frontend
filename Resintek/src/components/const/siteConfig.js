const telephoneNumber = '3002727376';

const siteConfig = {
    companyName: 'RESINTEK',
    moto: 'Pisamos firme contigo',
    whatsappNumber: `57${telephoneNumber}`,
    telephone: telephoneNumber,
    email: 'info@resintekcolombia.com',
    social_networks: {
        facebook: 'https://www.facebook.com/ResintekColombia',
        instagram: 'https://www.instagram.com/resintekcolombia/',
        whatsapp: `https://api.whatsapp.com/send?phone=${telephoneNumber}`,
    },
    address: {
        text: 'Avenida 6 #8-67, La Merced, Cali, Valle del Cauca',
        lat: 3.4496099445438686,        
        lng: -76.53418483236474       
    },
    endPoint: 'https://api.resintek.com.co/api/v1',
    experience: '2022-02-01',
    version: '1.0.0',
    derechos_reservados: `© ${new Date().getFullYear()} RESINTEK. Todos los derechos reservados.`,
}

export default siteConfig;