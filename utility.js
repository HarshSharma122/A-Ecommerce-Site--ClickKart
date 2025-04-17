const profileSection = document.querySelector(".profile_section");
const profile = document.getElementById("profile");
profile.addEventListener("click", () => {
  profileSection.classList.toggle("show");
});

/* for login and signup page javascript */
const signuppage = document.querySelector(".signuppage");
const loginpage = document.querySelector(".loginpage");
const LogSign = document
  .getElementById("LogSign")
  .addEventListener("click", () => {
    showCaseProduct.classList.add("none");
    accountStep.classList.remove("none");
    cloths_view.classList.add("none");
  });

const gotoLogin = () => {
  signuppage.setAttribute("class", "none");
  loginpage.removeAttribute("class", "none");
};
const gotoSignin = () => {
  signuppage.removeAttribute("class", "none");
  loginpage.setAttribute("class", "none");
};

const login = document
  .getElementById("login")
  .addEventListener("click", gotoLogin);
const signin = document
  .getElementById("signin")
  .addEventListener("click", gotoSignin);

const accountStep = document.getElementById("accountStep");
const cloths_view = document.querySelector(".cloths_view");

const UserName = document.getElementById("name");
const UserNumber = document.getElementById("number");
const UserPass = document.getElementById("password");
const Error = document.getElementById("error");
const saveData = () => {
  let name = UserName.value.trim();
  let number = UserNumber.value.trim();
  let password = UserPass.value.trim();

  if (name == "" || number == "" || password == "") {
    alert("fill all the details");
  }
  if (number.length < 10 || password.length < 5) {
    Error.innerText = "Please fill the valid information";
  } else {
    alert("Account created successfully..");
    accountStep.classList.add("none");
    cloths_view.classList.remove("none");
    searchInput.classList.remove("none");
    Navbar.classList.remove("none");
  }

  /* for saving data into localStorage*/
  const data = {
    Name: name,
    Contact: number,
    Password: password,
  };

  localStorage.setItem("Data", JSON.stringify(data));

  //   location.reload();
};

const CreateAcc = document
  .getElementById("createAcc")
  .addEventListener("click", saveData);

const numberlogin = document.getElementById("numberlogin");
const Passwordlogin = document.getElementById("passwordlogin");
const checkData = () => {
  let NumberLogValue = numberlogin.value;
  let PasswordLogValue = Passwordlogin.value;

  let localStrogvalue = localStorage.getItem("Data");
  let find = JSON.parse(localStrogvalue);
  if (find.Contact == NumberLogValue && find.Password == PasswordLogValue) {
    alert("successfully login...");
    showCaseProduct.classList.add("none");
    accountStep.classList.add("none");
    cloths_view.classList.remove("none");
  } else {
    alert("number and password does not match.");
  }
};

const openPers = document
  .getElementById("openPers")
  .addEventListener("click", checkData);
