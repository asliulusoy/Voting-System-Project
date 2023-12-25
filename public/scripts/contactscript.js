const form = document.querySelector('#request')
            const sendMessage = document.querySelector('#sendMessage')

            form.addEventListener("submit", async (e) => {
                e.preventDefault();


                const name = form.name.value
                const email = form.email.value
                const message = form.message.value


                try {
                    const res = await fetch('/contact', {
                        method: "POST",
                        body: JSON.stringify({ name, email, message }),
                        headers: { "Content-Type": "application/json" }
                    })

                    const data = await res.json();

                    if (data.succeeded) {
                        sendMessage.textContent = "Your Message Received."
                        sendMessage.style.display = "block"
                    }
                } catch (err) {
                    console.log("ERR::", err)
                }
            })