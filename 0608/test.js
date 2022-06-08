window.onload = () => {

  const onClickBtnAboutModal = () => {
    const modal = document.querySelector('.search-modal');
    const onclickbtn = document.querySelector('.onclickbtn'); 
    const searchinput = document.querySelector('.serch-form__input')
    onclickbtn.addEventListener('click', (e) =>
     { 
       modal.classList.remove('none');
       modal.classList.add('show')
       searchinput.focus(); 
  }
    );
  }
  onClickBtnAboutModal();

} //end everything