// JavaScript para manejar el deslizamiento de las subcategorías
document.addEventListener('DOMContentLoaded', function () {
    var categories = document.querySelectorAll('.category');

    categories.forEach(function (category) {
        category.addEventListener('click', function () {
            var subcategories = this.querySelector('.subcategories');
            subcategories.style.display = subcategories.style.display === 'none' ? 'block' : 'none';
        });
    });
});
        
