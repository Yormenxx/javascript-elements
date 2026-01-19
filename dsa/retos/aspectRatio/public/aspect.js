
async function calculate() {

    const $userUrl = document.getElementById("urlInput").value;
    const $divResult = document.getElementById("result");

    if (!$userUrl) return alert("Please enter a valid URL");

    try {
        const res = await fetch(`/api/resize?img=${encodeURIComponent($userUrl)}`);
        const data = await res.json();

        if(data.error){
            alert("Error: " + data.error);
            return;
        }

        document.getElementById('ratioText').innerText = `Ratio: ${data.aspect_ratio}`;
        document.getElementById('dimsText').innerText = `${data.ancho_real}x${data.alto_real}px`;
        document.getElementById('imgPreview').src = data.imagen;

        $divResult.style.display = 'block';


    }catch(error){
        console.error("Something went wrong");
        alert("Failed to fetch image data");
    }

}






