const books = {
    fiction:[
        {
            name: "fiction1",
            borrowed: false,
            user: "",
        },
        {
            name: "fiction2",
            borrowed: false,
            user: "",
        },
        {
            name: "fiction3",
            borrowed: false,
            user: "",
        }
    ],
    nonFiction: [
        {
            name: "nonfiction1",
            borrowed: false,
            user: "",
        },
        {
            name: "nonfiction2",
            borrowed: false,
            user: "",
        },
        {
            name: "nonfiction3",
            borrowed: false,
            user: "",
        }
    ]
};

// Retrieve members from localStorage or initialize empty array
let members = JSON.parse(localStorage.getItem('members')) || [];

// If members are not stored in localStorage, initialize with default members
if (members.length === 0) {
    members = [
        { name: "aaa", id: "100" },
        { name: "bbb", id: "101" },
        { name: "ccc", id: "102" }
    ];
    localStorage.setItem('members', JSON.stringify(members));
}

const mainDiv = document.createElement('div');
document.body.appendChild(mainDiv);

function renderBooks() {
    mainDiv.innerHTML = '';

    for (let obj in books) {
        for (let book of books[obj]) {
            const bookDiv = document.createElement('div');
            bookDiv.className = "bookDiv";
            mainDiv.appendChild(bookDiv);

            const bookName = document.createElement('h3');
            bookName.className = "bookName";
            bookName.textContent = book.name;
            bookDiv.appendChild(bookName);

            if (!book.borrowed) {
                const avail = document.createElement('p');
                avail.className = "avail";
                avail.textContent = "Available";
                const borrowBtn = document.createElement('button');
                borrowBtn.className = "borrowBtn";
                borrowBtn.textContent = "Borrow";
                borrowBtn.addEventListener('click', () => {
                    const id = prompt("Enter Your Member ID");
                    if (checkId(id)) {
                        book.user = id;
                        book.borrowed = true;
                        renderBooks(); 
                    }
                });
                bookDiv.appendChild(avail);
                bookDiv.appendChild(borrowBtn);
            } else {
                const unavail = document.createElement('p');
                unavail.className = "unavail";
                unavail.textContent = "Unavailable";
                unavail.style.color = 'red';
                const returnBtn = document.createElement('button');
                returnBtn.className = "returnBtn";
                returnBtn.textContent = "Return";
                returnBtn.addEventListener('click', () => {
                    const id = prompt("Enter Your Member ID");
                    if (id === book.user) {
                        book.user = "";
                        book.borrowed = false;
                        renderBooks();
                    } else {
                        alert("Invalid Member ID")
                    }
                });
                bookDiv.appendChild(unavail);
                bookDiv.appendChild(returnBtn);
            }
        }
    }

    const buttonContainer = document.createElement('div');
    buttonContainer.className = "buttonContainer";

    const addBooksBtn = document.createElement('button');
    addBooksBtn.textContent = "Add Books";
    addBooksBtn.className = "borrowBtn";
    addBooksBtn.addEventListener('click', () => {
        const id = prompt("Enter Id");
        if (checkId(id)) {
            const bookName = prompt("Enter Book Name");
            const bookType = prompt("Enter Book type (Fiction/Non Fiction)");
            const newBook = {
                name: bookName,
                borrowed: false,
                user: ""
            };
            if (bookType.toLowerCase() === "fiction") {
                books.fiction.push(newBook);
            } else if (bookType.toLowerCase().replace(/\s/g, '') === "nonfiction") {
                books.nonFiction.push(newBook);
            }
            renderBooks(); 
        }
    });
    buttonContainer.appendChild(addBooksBtn);

    const addUserBtn = document.createElement('button');
    addUserBtn.textContent = "Add User";
    addUserBtn.className = "borrowBtn";
    addUserBtn.addEventListener('click', () => {
        const name = prompt("Enter Your Name");
        const lastUser = members[members.length - 1];
        const newId = parseInt(lastUser.id) + 1;
        const newUser = {
            name: name,
            id: newId.toString()
        };
        members.push(newUser);
        localStorage.setItem('members', JSON.stringify(members));
        alert(`Your MemberID is ${newId.toString()}`);
        renderBooks();
    });
    buttonContainer.appendChild(addUserBtn);

    const viewUsersBtn = document.createElement('button');
    viewUsersBtn.textContent = "View Users";
    viewUsersBtn.className = "borrowBtn";
    viewUsersBtn.addEventListener('click', () => {
        alert("Current Members:\n" + members.map(user => `Name: ${user.name}, ID: ${user.id}`).join("\n"));
    });
    buttonContainer.appendChild(viewUsersBtn);

    mainDiv.appendChild(buttonContainer)

}

function checkId(id) {
    for (let user of members) {
        if (user.id === id) {
            return true;
        }
    }
    return false;
}

function createButton(text, className, onClick) {
    const button = document.createElement('button');
    button.textContent = text;
    button.className = className;
    button.addEventListener('click', onClick);
    return button;
}

renderBooks();
