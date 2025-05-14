
        window.onload = function () {
            setTimeout(function () {
                document.querySelector(".overlay").style.display = "none";
                document.querySelector(".container").style.display = "block";
            }, 1800);
        }

 

   
        let userclick = document.querySelectorAll("h4");
        let countp1 = 0;
        let countp2 = 0;
        let p1 = document.getElementById("player1");
        let p2 = document.getElementById("player2");
        let restartbtn = document.getElementById("restart");
        let cards = document.getElementById("card");

        let scenerio1 = [userclick[0], userclick[1], userclick[2]];
        let scenerio2 = [userclick[0], userclick[3], userclick[6]];
        let scenerio3 = [userclick[0], userclick[4], userclick[8]];
        let scenerio4 = [userclick[1], userclick[4], userclick[7]];
        let scenerio5 = [userclick[2], userclick[5], userclick[8]];
        let scenerio6 = [userclick[3], userclick[4], userclick[5]];
        let scenerio7 = [userclick[6], userclick[7], userclick[8]];
        let scenerio8 = [userclick[6], userclick[4], userclick[2]];

        let scenarios = [scenerio1, scenerio2, scenerio3, scenerio4, scenerio5, scenerio6, scenerio7, scenerio8];

        let player1 = true;

        userclick.forEach((item) => {
            item.addEventListener('click', function () {

                if (item.innerText !== "") return;

                if (player1) {
                    item.innerText = "x";
                    item.style.border = "4px solid #F5ED59";
                } else {
                    item.innerText = "o";
                    item.style.border = "4px solid #CFA056";
                }

                scenarios.forEach((combo) => {
                    let val1 = combo[0].innerText.trim().toLowerCase();
                    let val2 = combo[1].innerText.trim().toLowerCase();
                    let val3 = combo[2].innerText.trim().toLowerCase();



                    if (val1 !== "" && val1 === val2 && val2 === val3) {

                        setTimeout(() => {

                            // Show alert
                            if (val1 === "x" && val2 === "x" && val3 === "x") {
                                alert("Player 1 wins!");
                                countp1++;
                                p1.value = countp1 + " " + "Game win";
                                p1.focus();
                                p1.style.background = "#F5ED59";
                                p1.style.color = "white";
                            } else if (val1 === "o" && val2 === "o" && val3 === "o") {
                                alert("Player 2 wins!");
                                countp2++;
                                p2.value = countp2 + " " + "Game win";
                                p2.focus();
                                p2.style.background = "#CFA056";
                                p2.style.color = "white";
                            }
                           
                            // Create overlay div
                            let gifOverlay = document.createElement("div");
                            gifOverlay.style.position = "fixed";
                            gifOverlay.style.top = "0";
                            gifOverlay.style.left = "0";
                            gifOverlay.style.width = "100vw";
                            gifOverlay.style.height = "100vh";
                            gifOverlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)"; 
                            gifOverlay.style.display = "flex";
                            gifOverlay.style.alignItems = "center";
                            gifOverlay.style.justifyContent = "center";
                            gifOverlay.style.zIndex = "9999";

                            // Create GIF image element
                            let gif = document.createElement("img");
                            gif.src = "./images/winner.gif"; 
                            gif.style.maxWidth = "100%";
                            gif.style.height = "100%";
                            gif.style.objectFit = "cover";

                            // Append gif to overlay, then overlay to body
                            gifOverlay.appendChild(gif);
                            document.body.appendChild(gifOverlay);
                           

                            // Remove after 3 seconds
                            setTimeout(() => {
                                document.body.removeChild(gifOverlay);
                                userclick.forEach(cell => {
                                    cell.innerText = "";
                                    cell.style.border = "1px dashed black";
                                    p1.style.background = "";
                                    p2.style.background = "";
                                    p1.style.color = "";
                                    p2.style.color = "";

                                });
                            }, 5000);

                            disableClicks();
                            enableClicks();
                            player1 = true;

                        }, 400);


                    }

                });

                // ✅ Toggle player
                player1 = !player1;
            });
        });

        function disableClicks() {
            userclick.forEach(h4 => {
                h4.style.pointerEvents = "none";
            });
        }
        function enableClicks() {
            userclick.forEach(cell => {
                cell.style.pointerEvents = "auto";
            });
        }

        restartbtn.addEventListener('click', () => {
            // Reset all cells' text
            userclick.forEach(cell => {
                cell.innerText = "";
            });

            // Reset the input fields for Player 1 and Player 2
            p1.value = "";
            p2.value = "";





            setTimeout(function () {
                cards.style.backgroundImage = "url('./images/letplay.gif')";
                cards.style.objectFit = "cover";
                cards.style.backgroundRepeat = "no-repeat";
                cards.style.backgroundSize = "cover";
            }, 3000);
            setTimeout(function () {
                cards.style.backgroundImage = "";
            }, 4000);
        });

 