let User = ["Admin"];
let Password = ["Admin"];

let login = (event) => {
  event.preventDefault(); // Mencegah form submit dan refresh halaman

  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  for (let i = 0; i < User.length; i++) {
    if (username === User[i] && password === Password[i]) {
      alert("Login Successful");
      window.location.href = "home.html"; // Arahkan ke halaman home
      return; // Keluar dari fungsi
    }
  }
  alert("Login Failed");
};

let logout = () => {
  window.location = "index.html";
};

let register = () => {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  if (username === person.Username && password === person.Password) {
    alert("User already exists");
    window.location = "index.html";
    return false;
  } else {
    User.push(username);
    Password.push(password);
    alert("Registration Successful");
    window.location = "index.html";
    return false;
  }
};

let registerView = () => {
  let formLogin = document.getElementById("form");
  formLogin.innerHTML = `
            <div id="register" style="block" class="border border-navy p-5 w-1/4 rounded-lg hover:shadow-md">
                <h1 class="font-bold text-2xl font-metro text-center">Register User </h1>
                <form onsubmit="register(event)" class="space-y-6">
                    <div>
                        <label class="text-1xl font-metro block mt-8" for="username">Username :</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            class="border border-navy p-2 w-full rounded-lg bg-background font-metro"
                            placeholder="Username"
                        />
                    </div>
                    <div>
                        <label class="text-1xl font-metro block mt-3" for="password">Password :</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            class="border border-navy p-2 w-full rounded-lg bg-background font-metro"
                            placeholder="Password"
                        />
                    </div>
                    <button
                        type="submit"
                        class="font-metro font-bold bg-navy text-background p-2 w-full mt-5 rounded-lg border-2 border-navy hover:bg-background hover:text-navy transition duration-300"
                    >
                        Register
                    </button>
    
                    </form>
                    <div class="mt-5">
                        <p class="font-metro text-base block mt-2">
                        Sudah Punya akun?
                        <a href="index.html" class="font-metro font-bold text-navy hover:text-blue-900">
                            Login
                        </a>
                        </p>
                    </div>
            </div>`;
};

// Di dalam script.js
document.addEventListener("DOMContentLoaded", function () {
  let formLogin = document.getElementById("form");
  formLogin.innerHTML = `
        <div id="login" style="block" class="border border-navy p-5 w-1/4 rounded-lg hover:shadow-md">
            <h1 class="font-bold text-2xl font-metro text-center">Login User </h1>
            <form onsubmit="login(event)" class="space-y-6">
                <div>
                    <label class="text-1xl font-metro block mt-8" for="username">Username :</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        class="border border-navy p-2 w-full rounded-lg bg-background font-metro"
                        placeholder="Username"
                    />
                </div>
                <div>
                    <label class="text-1xl font-metro block mt-3" for="password">Password :</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        class="border border-navy p-2 w-full rounded-lg bg-background font-metro"
                        placeholder="Password"
                    />
                </div>
                <button
                    type="submit"
                    class="font-metro font-bold bg-navy text-background p-2 w-full mt-5 rounded-lg border-2 border-navy hover:bg-background hover:text-navy transition duration-300"
                >
                    Login
                </button>

                </form>
                <div class="mt-5">
                    <p class="font-metro text-base block mt-2">
                    Belum Punya akun? 
                    <button onclick="registerView()" class="font-metro font-bold text-navy hover:text-blue-900">
                        Register
                    </button>
                    </p>
                </div>
        </div>`;
});
