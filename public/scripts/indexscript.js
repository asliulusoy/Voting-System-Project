const form = document.querySelector('#signup-Form')
const emailError = document.querySelector('#email')
const passwordError = document.querySelector('#password')
const fullnameError = document.querySelector('#fullname')
const stuidError = document.querySelector('#stuid')

function adjustContainerHeight() {
   const totalHeight = emailError.clientHeight +
                      passwordError.clientHeight +
                      fullnameError.clientHeight +
                      stuidError.clientHeight;

   formContainer.style.height = totalHeight + 'px';
}

form.addEventListener("submit", async (e) => {
   e.preventDefault();

   emailError.textContent = "";
   passwordError.textContent = "";
   fullnameError.textContent = "";
   stuidError.textContent = "";
   emailError.style.display = "none"
   passwordError.style.display = "none"
   fullnameError.style.display = "none"
   stuidError.style.display = "none"

   const email = form.email.value
   const password = form.password.value
   const fullname = form.fullname.value
   const stuid= form.stuid.value

   try {
      const res = await fetch('users/signup', {
         method: "POST",
         body: JSON.stringify({ email, password, fullname, stuid }),
         headers: { "Content-Type": "application/json" }
      })

      const data = await res.json();

      if (data) {

         if (data.email) {
            adjustContainerHeight();
            emailError.textContent = data.email
            emailError.style.display = "block"
            adjustContainerHeight();
         }
         if (data.password) {
            adjustContainerHeight();
            passwordError.textContent = data.password
            passwordError.style.display = "block"
            adjustContainerHeight();
         }

         if (data.fullname) {
            adjustContainerHeight();
            fullnameError.textContent = data.fullname
            fullnameError.style.display = "block"
            adjustContainerHeight();
         }
         if (data.stuid) {
            adjustContainerHeight();
            stuidError.textContent = data.stuid
            stuidError.style.display = "block"
            adjustContainerHeight();
         }


      }

      if (data.user) {
         location.assign("/login")
      }

   } catch (err) {
      console.log("ERR::", err)
   }
})