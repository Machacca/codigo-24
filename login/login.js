/*
  document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
      event.preventDefault(); // Evitar que el formulario se envíe automáticamente

      // Validar campos de usuario y contraseña
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;

      if (!username || !password) {
        alert('Por favor, complete todos los campos.');
        return;
      }

      // Si la validación es exitosa, puedes enviar el formulario aquí
      // form.submit();
    });
  });*/

    function login() {
        // Obtener los valores de usuario y contraseña
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Simular una verificación de autenticación (deberías hacer esto en el servidor)
        if (username === "usuario" && password === "contraseña") {
            alert("Inicio de sesión exitoso. Redirigiendo a la página principal.");
            // Aquí deberías redirigir al usuario a la página principal usando window.location.href o realizar alguna acción específica
        } else {
            alert("Credenciales incorrectas. Por favor, inténtalo de nuevo.");
        }
    }

    document.getElementById("forgotPassword").addEventListener("click", function(event) {
        event.preventDefault();
        // Aquí puedes agregar el código para manejar la funcionalidad de "Olvidaste tu contraseña?"
        alert("Función de olvidaste tu contraseña no implementada aún. Deberías redirigir al usuario a una página para restablecer la contraseña.");
    });

    document.getElementById("signupLink").addEventListener("click", function(event) {
        event.preventDefault();
        // Aquí puedes agregar el código para manejar la funcionalidad de "No tiene una cuenta? Regístrese"
        alert("Función de registro no implementada aún. Deberías redirigir al usuario a la página de registro.");
    });

    function continueWith(provider) {
        // Aquí puedes agregar el código para manejar la funcionalidad de "Continuar con [Google/Microsoft/Apple]"
        alert("Función de continuar con " + provider + " no implementada aún. Deberías implementar la autenticación con " + provider + " y redirigir al usuario si es exitoso.");
    }

