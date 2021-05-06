const toggleBtn = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');
const button = document.querySelector('.fa-bars')

toggleBtn.addEventListener('click', () => {
    console.log(sidebar.classList);
    // if(sidebar.classList.contains('show-sidebar')){
    //     sidebar.classList.remove('show-sidebar');
    //     // button.setAttribute('style', 'display: flex')
    // }else{
    //     sidebar.classList.add('show-sidebar');
    //     button.style.display = 'none'
    // }
    sidebar.classList.toggle('show-sidebar');
    button.style.display = 'none'
})

closeBtn.addEventListener('click', () => {
    // sidebar.classList.remove('show-sidebar');
    if (sidebar.classList.contains("show-sidebar")) {
      sidebar.classList.remove("show-sidebar");
      button.style.display = 'flex'
    } else {
      sidebar.classList.add("show-sidebar");
    //   button.setAttribute("style", "display: none");
    }
})