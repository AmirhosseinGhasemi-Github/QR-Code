let genereateBtn=document.querySelector('form button');
let qrCodeBox= document.querySelector('.qr-code')
let qrInput= document.querySelector('form input');
let qrImage=document.querySelector('.qr-code img');
genereateBtn.addEventListener('click', () =>{
    let qrValue= qrInput.value;
    if(!qrValue){
        return alert('please write a text or address')
    }
    qrCodeBox.classList.remove('hidden');
    genereateBtn.innerText='getting QR-code'
    qrImage.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`
    qrImage.addEventListener('load',()=>{
        qrCodeBox.classList.remove('hidden');
        genereateBtn.innerText='generating QR-code'

    })
})
qrInput.addEventListener('keyup',()=>{
 if(!qrInput.value){
    qrCodeBox.classList.add('hidden');

 }
})

// second henerator
let qrCreator=document.querySelector('.form2 button')
let inputQr=document.querySelector('form input');

qrCreator.addEventListener('click',()=>{
let inputValue=qrInput.value;
console.log(inputValue);

})