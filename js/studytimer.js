        var workTime;
        var breakTime;
        var methodName;
        var roundNumber = 1;

        var currentEndTime;
        var isWorkTime = true;

        function chooseMethod(work, rest, name) {
            workTime = work;
            breakTime = rest;
            methodName = name;
            roundNumber = 1;
            isWorkTime = true;

            document.getElementById("studyCard").style.display = "block";

            document.getElementById("methodName").innerHTML = methodName;
            document.getElementById("phaseTitle").innerHTML = "Ready to Begin";
            document.getElementById("bigTime").innerHTML = workTime + ":00";
            document.getElementById("round").innerHTML = "Round 1";

            document.getElementById("message").innerHTML =
                "Your first focus session will be " + workTime + " minutes.";

            document.getElementById("startTime").innerHTML = "";
            document.getElementById("endTime").innerHTML = "";

            document.getElementById("startButton").style.display = "inline";
            document.getElementById("checkButton").style.display = "none";

        }

        function startSession() {
            var start;
            var end;

            isWorkTime = true;

            start = new Date();
            end = new Date();

            end.setMinutes(end.getMinutes() + workTime);
            currentEndTime = end;

            document.getElementById("phaseTitle").innerHTML = "Work Time";
            document.getElementById("bigTime").innerHTML = workTime + ":00";

            document.getElementById("message").innerHTML =
                "One focused round is better than hours of pretending.";

            document.getElementById("startTime").innerHTML =
                "Started at: " + formatTime(start);

            document.getElementById("endTime").innerHTML =
                "Work ends at: " + formatTime(end);

            document.getElementById("startButton").style.display = "none";
            document.getElementById("checkButton").style.display = "inline";

            window.alert("Start your " + workTime + " minute work session now.");
        }

        function checkTime() {
            var now;

            now = new Date();

            if (now >= currentEndTime) {
                if (isWorkTime == true) {
                    switchToBreak();
                }
                else {
                    nextRound();
                }
            }
            else {
                window.alert("Not yet. Keep going until " + formatTime(currentEndTime) + ".");
            }
        }

        function switchToBreak() {
            var start;
            var end;

            isWorkTime = false;

            start = new Date();
            end = new Date();

            end.setMinutes(end.getMinutes() + breakTime);
            currentEndTime = end;

            document.getElementById("phaseTitle").innerHTML = "Break Time";
            document.getElementById("bigTime").innerHTML = breakTime + ":00";

            document.getElementById("message").innerHTML =
                "Rest for " + breakTime + " minutes. Step away from the screen if you can.";

            document.getElementById("startTime").innerHTML =
                "Break started at: " + formatTime(start);

            document.getElementById("endTime").innerHTML =
                "Break ends at: " + formatTime(end);

            window.alert("Work session completed. Start your break.");
        }

        function nextRound() {
            var start;
            var end;

            roundNumber = roundNumber + 1;
            isWorkTime = true;

            start = new Date();
            end = new Date();

            end.setMinutes(end.getMinutes() + workTime);
            currentEndTime = end;

            document.getElementById("round").innerHTML = "Round " + roundNumber;
            document.getElementById("phaseTitle").innerHTML = "Work Time";
            document.getElementById("bigTime").innerHTML = workTime + ":00";

            document.getElementById("message").innerHTML =
                "Begin the next focus session. Keep going one round at a time.";

            document.getElementById("startTime").innerHTML =
                "Started at: " + formatTime(start);

            document.getElementById("endTime").innerHTML =
                "Work ends at: " + formatTime(end);

            window.alert("Start round " + roundNumber + ".");
        }

        function endSession() {
            document.getElementById("studyCard").style.display = "none";

            window.alert("Good job! Your study session has ended.");
        }
        function formatTime(timeObject) {
            var hours;
            var minutes;
            var timeText;

            hours = timeObject.getHours();
            minutes = timeObject.getMinutes();

            if (minutes < 10) {
                minutes = "0" + minutes;
            }

            timeText = hours + ":" + minutes;

            return timeText;
        }