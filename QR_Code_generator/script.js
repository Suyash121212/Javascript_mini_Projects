let qr_text = document.querySelector('#text-input');
let image = document.querySelector('#qr_image');
let generate_btn = document.querySelector("#button");


let download_btn = document.createElement('button');
download_btn.textContent = "Download QR Code";
download_btn.id = "download-button";
download_btn.style.display = "none";
download_btn.style.marginTop = "10px";
download_btn.style.padding = "8px 16px";
download_btn.style.backgroundColor = "#4CAF50";
download_btn.style.color = "white";
download_btn.style.border = "none";
download_btn.style.borderRadius = "4px";
download_btn.style.cursor = "pointer";


image.parentNode.insertBefore(download_btn, image.nextSibling);

async function getqr() {
    image.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qr_text.value;
    
    
    image.onload = function() {
        download_btn.style.display = "block";
    };
}


async function downloadQR() {
    try {
        
        const response = await fetch(image.src);
        const blob = await response.blob();
        
        
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        
        
        const filename = qr_text.value.trim() ? 
            'qr_' + qr_text.value.trim().replace(/[^a-z0-9]/gi, '_').substring(0, 20) + '.png' : 
            'qr_code.png';
            
        link.download = filename;
        
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } catch (error) {
        console.error('Error downloading QR code:', error);
        alert('Failed to download QR code. Please try again.');
    }
}

download_btn.addEventListener('click', downloadQR);


generate_btn.addEventListener('click', () => {
    getqr();
});