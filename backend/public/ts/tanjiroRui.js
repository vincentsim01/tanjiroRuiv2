var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var game = document.getElementById('game');
var tanjiroContainer = document.getElementById('tanjiroContainer');
var tanjiroImage = document.getElementById('tanjiroImage');
var ruiContainer = document.getElementById('ruiContainer');
var message = document.getElementById('message');
var messageContainer = document.getElementById('messageContainer');
var overlay = document.getElementById('overlay');
var nextLevelButton = document.getElementById('nextLevelButton');
var tryAgainButton = document.getElementById('tryAgainButton');
var webCounterDisplay = document.getElementById('webCounterDisplay');
var webSlashedCounterDisplay = document.getElementById('webSlashedCounterDisplay');
var swordSlashEffect = document.getElementById('swordSlashEffect');
var swordSlashEffect2 = document.getElementById('swordSlashEffect2');
var swordslashsound = document.getElementById('swordslashsound');
var tanjirobeheadruiContainer = document.getElementById('tanjirobeheadruiContainer');
var tanjirobeheadrui = document.getElementById('tanjirobeheadrui');
var tanjirobeheadruisound = document.getElementById('tanjirobeheadruisound');
var ExitButton = document.getElementById('ExitButton');
var leaderboardContainer = document.getElementById('leaderboardContainer');
var buttonContainer = document.getElementById('buttonContainer');
var ReallyExit = document.getElementById('ReallyExit');
var duelResultTitle = document.getElementById('duelResultTitle');
var duelResultDescription = document.getElementById('duelResultDescription');
var duelLevelMeter = document.getElementById('duelLevelMeter');
var webCounter = 0;
var webSlashedCounter = 0;
var duelLevel = 1;
var backendUrl = 'localhost:3500';
var players = [];
var nameInput = document.getElementById("name");
// const scoreInput = document.getElementById("score") as HTMLInputElement;
var addBtn = document.getElementById("addBtn");
var list = document.getElementById("leaderboard");
function reallyExit() {
    buttonContainer === null || buttonContainer === void 0 ? void 0 : buttonContainer.classList.remove('hidden');
    messageContainer === null || messageContainer === void 0 ? void 0 : messageContainer.classList.add('hidden');
    duelResultTitle.textContent = '';
    duelResultDescription.textContent = '';
    leaderboardContainer === null || leaderboardContainer === void 0 ? void 0 : leaderboardContainer.classList.add('hidden');
    duelLevel = 1;
    webCounter = 0;
    webSlashedCounter = 0;
    webProducingTime = webProducingStarter;
    duelLevelMeter.textContent = duelLevel.toString();
}
ReallyExit === null || ReallyExit === void 0 ? void 0 : ReallyExit.addEventListener("click", reallyExit);
function render() {
    // sort players by score
    players.sort(function (a, b) { return b.level - a.level; });
    // clear list
    list.innerHTML = "";
    // add each player to the list
    players.forEach(function (p, i) {
        var li = document.createElement("li");
        li.textContent = "".concat(i + 1, ". ").concat(p.name, " - ").concat(p.level, " - ").concat(p.webPassed, " - ").concat(p.webSlashed);
        list.appendChild(li);
    });
}
addBtn.onclick = function () { return __awaiter(_this, void 0, void 0, function () {
    var name, level, webPassed, webSlashed, newPlayer, res, data, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                name = nameInput.value.trim();
                level = duelLevel;
                webPassed = webCounter;
                webSlashed = webSlashedCounter;
                if (!name) {
                    alert('please provide name');
                    return [2 /*return*/];
                }
                ;
                players.push({ name: name, level: level, webPassed: webPassed, webSlashed: webSlashed });
                render();
                newPlayer = { name: name, level: level, webPassed: webPassed, webSlashed: webSlashed };
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                return [4 /*yield*/, fetch("uploadplayer", {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(newPlayer)
                    })];
            case 2:
                res = _a.sent();
                if (!res.ok) {
                    throw new Error("Server error: ".concat(res.status));
                }
                return [4 /*yield*/, res.json()];
            case 3:
                data = _a.sent();
                console.log('Server response:', data);
                return [3 /*break*/, 5];
            case 4:
                err_1 = _a.sent();
                console.error('Upload failed:', err_1);
                return [3 /*break*/, 5];
            case 5:
                nameInput.value = "";
                addBtn.classList.add('hidden');
                return [2 /*return*/];
        }
    });
}); };
var webProducingStarter = 3000;
var webProducingTime = 3000;
var tanjiroX = 95;
var tanjiroY = 20;
var Direction;
(function (Direction) {
    Direction["ArrowUp"] = "ArrowUp";
    Direction["ArrowDown"] = "ArrowDown";
    Direction["ArrowLeft"] = "ArrowLeft";
    Direction["ArrowRight"] = "ArrowRight";
    Direction["Space"] = " ";
})(Direction || (Direction = {}));
var keyLocked = false;
tanjiroContainer.style.left = "".concat(tanjiroX, "%");
tanjiroContainer.style.top = "".concat(tanjiroY, "%");
tanjiroImage.style.width = '3em';
tanjiroImage.style.height = '4em';
document.addEventListener("keydown", function (event) {
    if (keyLocked)
        return;
    switch (event.key) {
        case Direction.ArrowRight:
            if (tanjiroX < 95) {
                tanjiroX += 1;
                tanjiroContainer.style.left = "".concat(tanjiroX, "%");
            }
            break;
        case Direction.ArrowLeft:
            if (tanjiroX > 0) {
                tanjiroX -= 1;
                tanjiroContainer.style.left = "".concat(tanjiroX, "%");
            }
            break;
        case Direction.ArrowUp:
            if (tanjiroY > 0) {
                tanjiroY -= 10;
                tanjiroContainer.style.top = "".concat(tanjiroY, "%");
            }
            break;
        case Direction.ArrowDown:
            if (tanjiroY < 85) {
                tanjiroY += 10;
                tanjiroContainer.style.top = "".concat(tanjiroY, "%");
            }
            break;
        case Direction.Space:
            keyLocked = true;
            var newTanjiroX = tanjiroX;
            var newTanjiroY = tanjiroY;
            tanjiroContainer === null || tanjiroContainer === void 0 ? void 0 : tanjiroContainer.classList.remove('bg-yellow-500');
            // tanjiroContainer?.classList.add('bg-red-500');
            swordSlashEffect === null || swordSlashEffect === void 0 ? void 0 : swordSlashEffect.classList.remove('hidden');
            swordSlashEffect === null || swordSlashEffect === void 0 ? void 0 : swordSlashEffect.classList.add('slash');
            swordSlashEffect2 === null || swordSlashEffect2 === void 0 ? void 0 : swordSlashEffect2.classList.remove('hidden');
            swordSlashEffect2 === null || swordSlashEffect2 === void 0 ? void 0 : swordSlashEffect2.classList.add('slash2');
            tanjiroImage.src = './asset/image/tanjiro2.png';
            swordslashsound === null || swordslashsound === void 0 ? void 0 : swordslashsound.play();
            // tanjiroY=-30;
            setTimeout(function () {
                // tanjiroX=newTanjiroX;
                // tanjiroY=newTanjiroY;
                // tanjiroContainer?.classList.remove('bg-red-500');
                // tanjiroContainer?.classList.add('bg-yellow-500');
                keyLocked = false;
                swordSlashEffect === null || swordSlashEffect === void 0 ? void 0 : swordSlashEffect.classList.add('hidden');
                swordSlashEffect === null || swordSlashEffect === void 0 ? void 0 : swordSlashEffect.classList.remove('slash');
                swordSlashEffect2 === null || swordSlashEffect2 === void 0 ? void 0 : swordSlashEffect2.classList.add('hidden');
                swordSlashEffect2 === null || swordSlashEffect2 === void 0 ? void 0 : swordSlashEffect2.classList.remove('slash2');
                tanjiroImage.src = './asset/image/tanjiro.png';
                // tanjiroContainer.style.left = `${tanjiroX}%`;
                // tanjiroContainer.style.top = `${tanjiroY}%`;
            }, 700);
            // alert('Tanjiro use Hinokami Kagura Dance to dodge Rui\'s Blood Thread!');
            break;
    }
    if (tanjiroX <= 10) {
        tanjirobeheadruiContainer === null || tanjirobeheadruiContainer === void 0 ? void 0 : tanjirobeheadruiContainer.classList.remove('hidden');
        tanjirobeheadruisound === null || tanjirobeheadruisound === void 0 ? void 0 : tanjirobeheadruisound.play();
        setTimeout(function () {
            tanjirobeheadruiContainer === null || tanjirobeheadruiContainer === void 0 ? void 0 : tanjirobeheadruiContainer.classList.add('hidden');
        }, 3000);
        tanjiroX = 97;
        tanjiroY = 20;
        ;
        tanjiroContainer.style.left = "".concat(tanjiroX, "%");
        tanjiroContainer.style.top = "".concat(tanjiroY, "%");
        messageContainer === null || messageContainer === void 0 ? void 0 : messageContainer.classList.remove('hidden');
        nextLevelButton.classList.remove('hidden');
        duelResultTitle.textContent = 'You Win!';
        duelResultDescription.textContent = " Tanjiro has saved Nezuko from Rui Level ".concat(duelLevel, " !");
        webCounterDisplay.textContent = "Total Blood Threads Dodged: ".concat(webCounter);
        webSlashedCounterDisplay.textContent = "Total Blood Threads Slashed: ".concat(webSlashedCounter);
        // message!.innerHTML = ''; // Clear previous messages
        // let pMessage = document.createElement('p');
        // pMessage.textContent = 'You Win! Tanjiro has saved Nezuko from Rui!';
        // message?.appendChild(pMessage);
    }
});
// messageContainer?.addEventListener('click', (e) => {
//   const target = e.target as HTMLElement;
//     if (target.id !== "message" ) {
//         messageContainer.classList.add('hidden');
//         duelResultTitle!.textContent = '';
//         duelResultDescription!.textContent = '';
//     }
// });
function createBloodThread() {
    var bloodThreadX = 0;
    var thread = document.createElement('div');
    thread.className = 'absolute  rounded-full text-center text-lg z-3';
    // thread.textContent = '🕸️';
    thread.style.backgroundImage = 'url(./asset/image/spiderweb.png)';
    thread.style.backgroundSize = 'cover';
    thread.style.width = '50px';
    thread.style.height = '50px';
    thread.style.left = "-10%";
    thread.style.top = "".concat(Math.floor(Math.random() * 90), "%");
    game.appendChild(thread);
    var webMoveInterval = setInterval(function () {
        bloodThreadX += 1;
        thread.style.left = "".concat(bloodThreadX, "%");
        if (bloodThreadX > 88) {
            webCounter++;
            thread.remove();
            clearInterval(webMoveInterval);
        }
        //   document.addEventListener("keydown", (event: KeyboardEvent) => {
        //       if (event.key === Direction.Space) {
        //           keyLocked = true;
        //           console.log(keyLocked);
        //            if(bloodThreadX >= tanjiroX && bloodThreadX <= tanjiroX + 3 && parseInt(thread.style.top.replace('%',''))>= tanjiroY-13 && parseInt(thread.style.top.replace('%','')) <= tanjiroY + 18){
        //                 thread.style.backgroundImage = 'url(./asset/image/webslashed.png)';
        //                 thread.classList.add('cutdownleft');
        //                 clearInterval(webMoveInterval);
        //                 setTimeout(() => {
        //                     thread.remove();
        //                 }, 800)
        //                 return;
        //            }
        //       }
        //   });
        //     setTimeout(() => {
        //     keyLocked=false;
        // }, 700);
        // Collision detection
        if (bloodThreadX >= tanjiroX && bloodThreadX <= tanjiroX + 3 && parseInt(thread.style.top.replace('%', '')) >= tanjiroY - 13 && parseInt(thread.style.top.replace('%', '')) <= tanjiroY + 18) {
            console.log(keyLocked);
            if (keyLocked) {
                webSlashedCounter++;
                thread.style.backgroundImage = 'url(./asset/image/webslashed.png)';
                thread.classList.add('cutdownleft');
                thread.style.width = '80px';
                thread.style.height = '80px';
                clearInterval(webMoveInterval);
                setTimeout(function () {
                    thread.remove();
                }, 800);
                return;
            }
            messageContainer === null || messageContainer === void 0 ? void 0 : messageContainer.classList.remove('hidden');
            duelResultTitle.textContent = 'Game Over!';
            duelResultDescription.textContent = ' Tanjiro has been caught by Rui\'s Blood Thread !';
            bloodThreadX = 100; // Move the thread out of bounds to stop further checks
            webCounterDisplay.textContent = "Total Blood Threads Dodged: ".concat(webCounter - 1);
            webSlashedCounterDisplay.textContent = "Total Blood Threads Slashed: ".concat(webSlashedCounter);
            thread.remove();
            tanjiroX = 95;
            tanjiroY = 20;
            tanjiroContainer.style.left = "".concat(tanjiroX, "%");
            tanjiroContainer.style.top = "".concat(tanjiroY, "%");
        }
    }, 50);
}
var bloodInterval = setInterval(createBloodThread, webProducingTime);
duelLevelMeter.textContent = duelLevel.toString();
function tryAgain() {
    messageContainer === null || messageContainer === void 0 ? void 0 : messageContainer.classList.add('hidden');
    duelResultTitle.textContent = '';
    duelResultDescription.textContent = '';
}
tryAgainButton === null || tryAgainButton === void 0 ? void 0 : tryAgainButton.addEventListener('click', tryAgain);
function nextLevel() {
    duelLevel++;
    messageContainer === null || messageContainer === void 0 ? void 0 : messageContainer.classList.add('hidden');
    nextLevelButton.classList.add('hidden');
    duelResultTitle.textContent = '';
    duelResultDescription.textContent = '';
    duelLevelMeter.textContent = duelLevel.toString();
    if (duelLevel > 5) {
        webProducingTime = webProducingStarter / duelLevel;
    }
    else if (duelLevel <= 5) {
        webProducingTime = webProducingStarter - duelLevel * 500;
    }
    // messageContainer?.classList.remove('hidden');
    clearInterval(bloodInterval);
    bloodInterval = setInterval(createBloodThread, webProducingTime);
}
nextLevelButton === null || nextLevelButton === void 0 ? void 0 : nextLevelButton.addEventListener('click', nextLevel);
function exitGame() {
    duelResultTitle.textContent = '';
    duelResultDescription.textContent = '';
    addBtn.classList.remove('hidden');
    leaderboardContainer === null || leaderboardContainer === void 0 ? void 0 : leaderboardContainer.classList.remove('hidden');
    buttonContainer === null || buttonContainer === void 0 ? void 0 : buttonContainer.classList.add('hidden');
}
ExitButton === null || ExitButton === void 0 ? void 0 : ExitButton.addEventListener("click", exitGame);
