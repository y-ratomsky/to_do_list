const btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  let noteValue = document.querySelector(".input");

  if (noteValue.value === "") {
    noteValue.setAttribute("placeholder", "Введите заметку");
  } else {
    const note = document.createTextNode(noteValue.value);
    const li = document.createElement("li");
    li.appendChild(note);

    const ul = document.querySelector(".notes");
    ul.appendChild(li);

    noteValue.value = "";

    const btnReady = document.createElement("button");
    const btnReadyText = "Готово";
    btnReady.innerHTML = btnReadyText;
    li.appendChild(btnReady);

    btnReady.addEventListener("click", function () {
      li.classList.toggle("decor");
      li.classList.remove("top");

      if (btnReady.innerHTML == "Готово") {
        let btnReadyText = "Вернуть в работу";
        btnReady.innerHTML = btnReadyText;
      } else {
        let btnReadyText = "Готово";
        btnReady.innerHTML = btnReadyText;
        li.classList.remove("decor");
      }
    });

    const btnDel = document.createElement("button");
    const btnText = "Удалить";
    btnDel.innerHTML = btnText;
    li.appendChild(btnDel);

    btnDel.addEventListener("click", function () {
      li.remove();
    });

    const btnTop = document.createElement("button");
    const btnTextTop = "Закрепить";
    btnTop.innerHTML = btnTextTop;
    li.appendChild(btnTop);

    btnTop.addEventListener("click", function () {
      li.classList.toggle("top");
      li.classList.remove("decor");

      btnReady.innerHTML = "Готово";

      if (btnTop.innerHTML == "Закрепить") {
        let btnText = "Открепить";
        btnTop.innerHTML = btnText;
      } else {
        let btnText = "Закрепить";
        btnTop.innerHTML = btnText;
        li.classList.remove("top");
      }
    });
  }
});
