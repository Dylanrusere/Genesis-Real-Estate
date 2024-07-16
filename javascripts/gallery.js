let preveiwContainer = document.querySelector('.gallery-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('.gallery-container .gallery').forEach(gallery =>{
  gallery.onclick = () =>{
    preveiwContainer.style.display = 'flex';
    let name = gallery.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});

previewBox.forEach(close =>{
  close.querySelector('.fa-times').onclick = () =>{
    close.classList.remove('active');
    preveiwContainer.style.display = 'none';
  };
});