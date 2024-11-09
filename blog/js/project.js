const myProjects = document.querySelectorAll('.project__my-text');
for (let i = 0; i < myProjects.length; i++) {
    const element = myProjects[i];
    element.addEventListener('click', function(){
        element.classList.toggle('my-text-active');
    });
};