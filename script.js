// declare form and background to use them in multiple places

let form = document.getElementById("form");
let blur = document.querySelector(".tableSection");

// afficher le modal
const show = () => {
  if (form.classList.contains("invisible")) {
    form.classList.remove("invisible");
    form.classList.add("form");
    blur.classList.add("blur");
  }
};
//save data
const save = () => {
  const statuValue = document.getElementById("Etat").value;
  const status = statuValue.charAt(0).toUpperCase() + statuValue.slice(1);
  let data = {
    id: Math.floor(Math.random() * 9999),
    createdDate: document.getElementById("date").value,
    status: status,
    lastName: document.getElementById("nom").value,
    firstName: document.getElementById("Prenom").value,
    userName: document.getElementById("nomUtilisateur").value,
    registrationNumber: document.getElementById("matricule").value,
  };
  // push  user data in array
  users.push(data);
  // remove the modal and go back to table
  if (form.classList.contains("form")) {
    form.classList.remove("form");
    form.classList.add("invisible");
    blur.classList.remove("blur");
  }

  // refresh inputs and make them empty
  document.getElementById("date").value = "";
  document.getElementById("Etat").value = "";
  document.getElementById("nom").value = "";
  document.getElementById("Prenom").value = "";
  document.getElementById("nomUtilisateur").value = "";
  document.getElementById("matricule").value = "";

  // return table full of data
  tbody.innerHTML = "";
  loadData();
};
// fetch data in table with color conditions
const loadData = () => {
  let tbody = document.getElementById("tbody");
  users.forEach((user) => {
    tbody.innerHTML += `<tr>
        <td>${user.id}</td>
        <td>${new Date(user.createdDate).toLocaleDateString()}</td>
        ${
          user.status === "Valide"
            ? `<td><p class="Valide">${user.status}</p></td>`
            : user.status === "En validation"
            ? `<td><p class="EnValidation">${user.status}</p></td>`
            : user.status === "Rejete"
            ? `<td><p class="Rejete">${user.status}</p></td>`
            : `<td><p>statu invalide</p></td>`
        } 
        <td>${user.lastName}</td>
        <td>${user.firstName}</td>
        <td>${user.userName}</td>
        <td>${user.registrationNumber}</td>
        <td><img class="delete" src="/icones/trashcan.png" alt="trashcan"></td>
        </tr>`;
  });
};

// delete from table
table.addEventListener("click", (e) => {
  let warning = "supprimer cet utilisateur ?";
  if (e.target.classList.contains("delete")) {
    if (confirm(warning) == true) {
      e.target.parentNode.parentNode.remove();
    }
  }
});

// data array

let users = [
  {
    id: "123456789",
    createdDate: "2021-01-06T00:00:00.000Z",
    status: "En validation",
    firstName: "Mohamed",
    lastName: "Taha",
    userName: "mtaha",
    registrationNumber: "2584",
  },
  {
    id: "987654321",
    createdDate: "2021-07-25T00:00:00.000Z",
    status: "Valide",
    firstName: "Hamid",
    lastName: "Orrich",
    userName: "horrich",
    registrationNumber: "1594",
  },
  {
    id: "852963741",
    createdDate: "2021-09-15T00:00:00.000Z",
    status: "Rejete",
    firstName: "Rachid",
    lastName: "Mahidi",
    userName: "rmahidi",
    registrationNumber: "3576",
  },
];
