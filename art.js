function shape(ctx, path, fill, outline, width = 3) {
  const outlinePath = new Path2D(path);
  if (fill) {
    ctx.fillStyle = fill;
    ctx.fill(outlinePath);
  }
  if (outline) {
    ctx.strokeStyle = outline;
    ctx.lineWidth = width;
    ctx.stroke(outlinePath);
  }
}

function ellipse(ctx, x, y, radiusX, radiusY, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.ellipse(x, y, radiusX, radiusY, 0, 0, Math.PI * 2);
  ctx.fill();
}

function gradient(ctx, from, to, start, end) {
  const brush = ctx.createLinearGradient(...start, ...end);
  brush.addColorStop(0, from);
  brush.addColorStop(1, to);
  return brush;
}

function grain(ctx, seed, opacity = 0.2) {
  let number = seed;
  const random = () => {
    number = (Math.imul(number, 1664525) + 1013904223) >>> 0;
    return number / 4294967296;
  };
  ctx.save();
  ctx.globalAlpha = opacity;
  for (let index = 0; index < 4500; index += 1) {
    const x = random() * 800;
    const y = random() * 480;
    ctx.fillStyle = random() > 0.45 ? '#fff' : '#26322d';
    ctx.fillRect(x, y, 1 + random() * 2, 1 + random());
  }
  ctx.restore();
}

function sparkle(ctx, x, y, size, color) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(size, size);
  shape(ctx, 'M0 -1 Q.14 -.15 1 0 Q.14 .15 0 1 Q-.14 .15 -1 0 Q-.14 -.15 0 -1 Z', color);
  ctx.restore();
}

function pine(ctx, x, base, scale, color) {
  ctx.save();
  ctx.translate(x, base);
  ctx.scale(scale, scale);
  shape(ctx, 'M 0 -128 L 23 -82 11 -86 35 -51 21 -56 45 -20 6 -29 7 0 -6 0 -6 -29 -43 -21 -20 -55 -35 -51 -11 -86 -24 -82 Z', color);
  ctx.restore();
}

function radioArt(ctx) {
  ctx.fillStyle = gradient(ctx, '#edeafd', '#cdbff2', [80, 70], [780, 450]);
  ctx.fillRect(0, 0, 800, 480);
  ellipse(ctx, 610, 160, 128, 128, '#e0d2ff');
  ellipse(ctx, 610, 160, 102, 102, '#f4e8bf');
  shape(ctx, 'M 0 300 Q 100 216 186 253 T 330 252 Q 450 198 538 247 T 800 264 V480 H0 Z', '#b9b0df');
  shape(ctx, 'M 0 352 Q 131 277 270 326 Q 436 378 572 291 Q 689 240 800 298 V480 H0 Z', '#a99acb');
  shape(ctx, 'M 0 402 Q 157 329 289 381 T 551 365 Q 660 309 800 352 V480 H0 Z', '#8775ad');
  shape(ctx, 'M 0 466 Q 203 376 390 445 Q 607 493 800 399 V480 H0 Z', '#6d5d95');
  [
    [69, 415, 0.9], [126, 409, 0.58], [179, 419, 0.7], [250, 440, 0.47],
    [699, 402, 0.72], [748, 406, 0.95], [793, 418, 1.2]
  ].forEach(([x, y, size]) => pine(ctx, x, y, size, '#605182'));
  ellipse(ctx, 412, 441, 153, 21, '#54466e55');
  ctx.save();
  ctx.translate(414, 275);
  ctx.rotate(-0.22);
  ctx.setLineDash([8, 11]);
  shape(ctx, 'M -142 -87 C -230 -119 -237 -194 -125 -218 M 125 -39 Q 234 -78 238 -170', null, '#f8f2ff', 3);
  ctx.setLineDash([]);
  shape(ctx, 'M 66 -127 L 72 -230 Q 73 -242 84 -242 H91 Q100 -242 100 -227 L96 -115 Z', '#382b4e', '#392b4f', 5);
  shape(ctx, 'M 77 -232 L 73 -132', null, '#9585b2', 4);
  shape(ctx, 'M -73 -122 H71 Q108 -120 112 -83 L106 122 Q103 151 76 156 H-75 Q-106 151 -112 124 L-114 -84 Q-112 -119 -73 -122 Z', '#443451', '#322642', 6);
  shape(ctx, 'M -74 -118 H54 Q78 -116 82 -84 L76 121 Q74 142 54 144 H-74 Q-100 138 -101 117 L-105 -85 Q-104 -114 -74 -118 Z', '#685181', '#382b4e', 5);
  shape(ctx, 'M -72 -104 H50 Q67 -101 68 -80 L65 107 Q65 127 48 129 H-67 Q-80 126 -81 109 L-86 -82 Q-83 -101 -72 -104 Z', gradient(ctx, '#886da6', '#5b456f', [-80, -120], [85, 160]), '#382b4e', 3);
  shape(ctx, 'M -57 -77 H44 Q51 -77 51 -69 V-27 H-60 Q-67 -27 -67 -35 V-68 Q-67 -76 -57 -77 Z', '#e5ebaf', '#382b4e', 5);
  shape(ctx, 'M -49 -54 H-38 L-31 -62 -23 -41 -14 -54 H12 L22 -46 32 -58 H36', null, '#535c44', 3);
  for (let row = 0; row < 5; row += 1) {
    shape(ctx, `M -51 ${-4 + row * 13} H 38`, null, '#30223e', 5);
  }
  ellipse(ctx, -33, 94, 11, 10, '#d89aab');
  ellipse(ctx, 7, 94, 10, 10, '#c9b3dd');
  ellipse(ctx, 37, 94, 10, 10, '#c9b3dd');
  shape(ctx, 'M -104 -54 H-120 L-119 -8 H-103 M -103 5 H-116 V35 H-103', '#493656', '#33243e', 3);
  ctx.restore();
  [[145, 118, 14], [257, 190, 9], [567, 195, 16], [710, 90, 10], [718, 244, 16], [136, 263, 9]].forEach(([x, y, size]) => sparkle(ctx, x, y, size, '#fbf2d0'));
  grain(ctx, 17, 0.32);
}

function nightArt(ctx) {
  ctx.fillStyle = gradient(ctx, '#b9d4be', '#456e63', [0, 0], [800, 480]);
  ctx.fillRect(0, 0, 800, 480);
  ellipse(ctx, 627, 126, 78, 78, '#e5efbf');
  shape(ctx, 'M0 331 Q96 210 220 282 Q325 199 435 290 Q566 240 800 306 V480 H0 Z', '#6b977c');
  shape(ctx, 'M0 376 Q124 281 286 355 Q429 410 578 308 Q674 260 800 315 V480 H0 Z', '#46765d');
  shape(ctx, 'M0 449 Q152 332 302 411 T800 375 V480 H0 Z', '#315746');
  [[25, 420, 1.28], [105, 410, 0.78], [730, 390, 0.78], [784, 420, 1.45], [675, 388, 0.54]]
    .forEach(([x, y, size]) => pine(ctx, x, y, size, '#2d5747'));
  ctx.save();
  ctx.translate(398, 292);
  shape(ctx, 'M -12 33 C -56 12 -75 -39 -151 -26 Q -203 -23 -229 34 Q -174 18 -143 45 Q -103 73 -35 62 Z', '#c47745', '#3b4133', 5);
  shape(ctx, 'M -186 -9 Q -212 4 -229 34 Q -195 25 -170 31 Q -168 11 -186 -9 Z', '#f5d5a2');
  shape(ctx, 'M -65 35 Q -20 -29 55 -11 L 83 -30 83 -87 118 -54 155 -72 151 -25 213 12 171 33 Q 139 45 99 24 Q 80 52 64 66 L 100 116 79 116 41 76 -9 75 -52 117 -74 118 -39 65 Z', '#d38953', '#3b4133', 5);
  shape(ctx, 'M 98 6 Q138 14 161 0 L210 12 171 31 Q133 42 99 24 L79 43 Z', '#f3d4aa');
  shape(ctx, 'M 91 -74 L112 -52 93 -43 Z M 147 -62 L146 -28 127 -44 Z', '#513e35');
  ellipse(ctx, 151, -10, 4.5, 5.5, '#2c392f');
  ellipse(ctx, 205, 13, 8, 5, '#2c392f');
  ctx.restore();
  [[198, 112, 10], [319, 176, 7], [547, 92, 6], [697, 214, 8]].forEach(([x, y, size]) => sparkle(ctx, x, y, size, '#e5efbf'));
  grain(ctx, 21, 0.28);
}

function doorArt(ctx) {
  ctx.fillStyle = gradient(ctx, '#f4e0b8', '#c08b60', [90, 15], [740, 480]);
  ctx.fillRect(0, 0, 800, 480);
  shape(ctx, 'M0 445 Q160 366 353 400 T800 383 V480 H0 Z', '#bb8764');
  shape(ctx, 'M0 468 Q289 404 471 452 T800 414 V480 H0 Z', '#aa7658');
  ctx.strokeStyle = '#b5815c';
  ctx.lineWidth = 3;
  for (let y = 60; y < 415; y += 58) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(800, y + 7);
    ctx.stroke();
    for (let x = y % 4 === 0 ? 5 : 75; x < 800; x += 140) {
      ctx.beginPath();
      ctx.moveTo(x, y - 52);
      ctx.lineTo(x - 2, y);
      ctx.stroke();
    }
  }
  shape(ctx, 'M 216 425 V220 Q217 65 396 36 Q569 62 572 224 V426 Z', '#e4bf8b', '#825a48', 6);
  shape(ctx, 'M 248 426 V226 Q249 104 397 69 Q535 100 540 227 V426 Z', '#47373b', '#8e6048', 6);
  shape(ctx, 'M 262 421 V225 Q268 124 398 83 Q496 108 506 201 L484 443 Z', '#8e5b47', '#392c31', 6);
  shape(ctx, 'M 286 406 V226 Q288 146 399 108 Q467 127 479 202 L456 419 Z', '#a76d50', '#52382e', 3);
  shape(ctx, 'M 328 403 L333 157 M 377 411 L381 124 M 425 416 L439 141', null, '#644535', 4);
  shape(ctx, 'M 509 238 L533 242 532 421 485 426 Z', '#f6d995');
  shape(ctx, 'M 503 429 L533 431 624 480 446 480 Z', '#f3cd82');
  ellipse(ctx, 446, 275, 12, 12, '#442f29');
  ellipse(ctx, 446, 273, 8, 8, '#deb276');
  [[143, 151, 14], [651, 97, 11], [599, 248, 9], [696, 279, 5]].forEach(([x, y, size]) => sparkle(ctx, x, y, size, '#fceac5'));
  grain(ctx, 31, 0.3);
}

function beastArt(ctx, level) {
  ctx.fillStyle = gradient(ctx, '#e7efcd', '#c9dea8', [160, 0], [700, 480]);
  ctx.fillRect(0, 0, 800, 480);
  ellipse(ctx, 405, 400, 183, 22, '#587c4b38');
  ctx.save();
  ctx.translate(61, -22);
  const outline = '#26463a';
  shape(ctx, 'M 235 334 C 203 342 192 324 201 310 Q 213 294 230 309 Q 245 277 264 296 L 283 324 Z', '#5e9168', outline, 6);
  shape(ctx, 'M 466 317 Q 501 295 516 265 Q 523 249 534 256 Q 546 262 540 277 Q 568 259 570 279 Q 569 288 557 300 Q 583 294 579 315 Q 568 346 513 351 L 475 355 Z', '#71a67a', outline, 6);
  shape(ctx, 'M 252 178 C 216 159 218 105 243 83 Q 244 143 286 151 M 415 161 Q 467 130 455 86 Q 503 115 478 160 L 454 191 Z', '#e2c897', outline, 6);
  shape(ctx, 'M 239 271 C 232 205 253 158 317 147 Q 329 120 361 119 L 351 140 Q 371 133 389 146 C 453 149 490 185 495 255 C 500 295 489 331 472 352 Q 485 375 461 387 Q 432 396 411 379 Q 368 397 326 380 Q 301 398 276 384 Q 263 376 273 354 C 253 337 240 306 239 271 Z', gradient(ctx, '#a1c58a', '#679b72', [265, 160], [489, 372]), outline, 7);
  ellipse(ctx, 370, 304, 76, 57, '#c0d6a0');
  ellipse(ctx, 319, 224, 28, 35, '#f6f1d2');
  ellipse(ctx, 415, 219, 29, 35, '#f6f1d2');
  ellipse(ctx, 327, 225, 11, 16, '#263f36');
  ellipse(ctx, 423, 220, 11, 16, '#263f36');
  ellipse(ctx, 331, 220, 3, 4, '#f6f1d2');
  ellipse(ctx, 427, 215, 3, 4, '#f6f1d2');
  ellipse(ctx, 283, 269, 14, 9, '#d99e85');
  ellipse(ctx, 453, 260, 14, 9, '#d99e85');
  shape(ctx, 'M 344 266 Q 367 292 392 263 Q 389 296 369 295 Q 350 294 344 266 Z', outline, outline, 3);
  shape(ctx, 'M 353 273 L 364 278 362 285 Z M 381 273 L 389 267 386 280 Z', '#fcf1d3');
  if (level >= 4) {
    shape(ctx, 'M 266 289 Q 364 344 478 288 L 472 308 Q 431 330 404 330 L 438 361 407 372 375 337 Q 314 341 269 313 Z', '#dba56c', outline, 4);
  }
  ctx.restore();
  [[173, 156, 17], [242, 106, 9], [624, 164, 21], [668, 249, 12], [591, 99, 7], [157, 309, 8]].forEach(([x, y, size]) => sparkle(ctx, x, y, size, '#fff5cb'));
  grain(ctx, 31, 0.23);
}

function drawArtwork(container) {
  for (const canvas of container.querySelectorAll('canvas[data-art]')) {
    const ctx = canvas.getContext('2d');
    if (!ctx) continue;
    ctx.save();
    ctx.scale(canvas.width / 800, canvas.height / 480);
    const drawing = canvas.dataset.art;
    if (drawing === 'radio') radioArt(ctx);
    else if (drawing === 'night') nightArt(ctx);
    else if (drawing === 'door') doorArt(ctx);
    else beastArt(ctx, Number(canvas.dataset.level));
    ctx.restore();
  }
}
