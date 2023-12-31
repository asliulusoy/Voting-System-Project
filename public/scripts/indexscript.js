const form = document.querySelector('#signup-Form')
const emailError = document.querySelector('#email')
const passwordError = document.querySelector('#password')
const fullnameError = document.querySelector('#fullname')
const stuidError = document.querySelector('#stuid')


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
   const stuid = form.stuid.value

   try {
      const res = await fetch('users/signup', {
         method: "POST",
         body: JSON.stringify({ email, password, fullname, stuid }),
         headers: { "Content-Type": "application/json" }
      })

      const data = await res.json();

      if (data) {

         if (data.email) {

            emailError.textContent = data.email
            emailError.style.display = "block"

         }
         if (data.password) {

            passwordError.textContent = data.password
            passwordError.style.display = "block"

         }

         if (data.fullname) {

            fullnameError.textContent = data.fullname
            fullnameError.style.display = "block"

         }
         if (data.stuid) {

            stuidError.textContent = data.stuid
            stuidError.style.display = "block"

         }


      }

      if (data.user) {
         location.assign("/login")
      }

   } catch (err) {
      console.log("ERR::", err)
   }
})