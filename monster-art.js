const habitats = {
  meadow: ['#f0f1d3', '#c8deb2', '#8ca984', '#f7efba'],
  dusk: ['#eee5fb', '#bbb1df', '#9385bf', '#ffebcd'],
  candy: ['#ffeed9', '#efbcb1', '#ba858f', '#fff2cb'],
  library: ['#f3dfbd', '#d9ac88', '#ab775c', '#f6e5b9'],
  cave: ['#dcece8', '#a9b8d8', '#7278a6', '#d2f7f3'],
  space: ['#473c73', '#5e6fa1', '#4a477c', '#e9d6ff']
};

function backdrop(ctx, habitat) {
  const [first, second, hill, light] = habitats[habitat];
  ctx.fillStyle = gradient(ctx, first, second, [55, 40], [738, 460]);
  ctx.fillRect(0, 0, 800, 480);
  ellipse(ctx, 603, 133, 71, 71, light);
  ellipse(ctx, 611, 134, 99, 99, light + '38');
  if (habitat === 'library') {
    for (const x of [28, 587]) {
      shape(ctx, `M${x} 106 H${x + 180} V401 H${x} Z`, '#9e6955', '#815648', 5);
      for (const y of [198, 304, 400]) {
        shape(ctx, `M${x} ${y} H${x + 180}`, null, '#644b45', 7);
        for (let n = 0; n < 6; n += 1) {
          const left = x + 9 + n * 28;
          const height = 35 + n * 7 % 26;
          shape(ctx, `M${left} ${y - 6} v-${height} h20 v${height} Z`, [light, '#b1b88e', '#c69cb1'][n % 3]);
        }
      }
    }
  } else {
    shape(ctx, 'M0 344 Q174 223 314 332 Q430 393 594 311 Q700 264 800 311 V480 H0Z', hill + '82');
    shape(ctx, 'M0 436 Q209 325 378 408 Q589 473 800 381 V480 H0Z', hill);
    if (habitat === 'meadow' || habitat === 'dusk') {
      pine(ctx, 75, 443, 1.23, hill);
      pine(ctx, 752, 408, 0.9, hill);
      pine(ctx, 113, 429, 0.63, hill);
    }
    if (habitat === 'cave') {
      shape(ctx, 'M57 442 L104 352 117 413 155 319 183 429Z M641 439 L670 330 693 391 741 316 771 423Z', '#c7e9e780', light, 4);
    }
    if (habitat === 'space') {
      shape(ctx, 'M531 139 Q606 178 703 103 Q751 74 720 75', null, '#ffe3cf8f', 8);
    }
  }
  for (const [x, y, size] of [[113, 125, 12], [199, 193, 8], [691, 245, 15], [700, 73, 9], [491, 91, 6], [130, 285, 6]]) {
    sparkle(ctx, x, y, size, light);
  }
}

const bodies = {
  blob: 'M-126 -30 C-150 -84 -130 -197 -55 -215 Q-39 -245 -11 -245 L-17 -226 Q8 -242 28 -219 C100 -226 146 -157 143 -75 C143 -39 132 -20 119 -7 Q137 20 105 31 Q79 40 58 22 Q13 35 -40 24 Q-64 45 -95 31 Q-111 26 -104 5 Q-121 -10 -126 -30Z',
  cloud: 'M-132 -22 Q-171 -54 -146 -107 Q-166 -167 -112 -193 Q-103 -245 -39 -227 Q4 -271 48 -228 Q115 -246 125 -188 Q173 -174 157 -112 Q178 -53 131 -23 Q123 27 70 20 Q29 48 -16 24 Q-63 45 -91 14 Q-130 19 -132 -22Z',
  dragon: 'M-124 -22 Q-153 -103 -105 -167 L-84 -205 -72 -186 -53 -223 -27 -204 3 -235 28 -212 61 -215 Q132 -188 139 -105 Q147 -76 161 -65 Q185 -50 171 -25 Q147 -1 113 0 Q124 25 97 33 Q58 40 45 19 Q-8 38 -54 24 Q-72 43 -107 30 Q-124 21 -112 2Z',
  mushroom: 'M-110 -14 Q-136 -102 -94 -164 Q-52 -205 10 -192 Q79 -208 106 -150 Q143 -89 110 -12 Q130 10 105 30 Q71 38 48 22 Q2 40 -44 24 Q-68 41 -100 30 Q-130 19 -110 -14Z',
  spirit: 'M-147 -23 Q-110 -52 -131 -120 Q-133 -199 -65 -208 L-36 -242 -14 -216 12 -249 33 -219 Q95 -220 118 -155 Q143 -112 140 -77 Q150 -45 171 -29 Q145 -11 109 -10 Q96 20 68 13 Q42 51 15 26 Q-29 60 -59 23 Q-96 43 -111 11 Q-139 19 -147 -23Z'
};

function monsterHorns(ctx, horns, ink, light) {
  if (horns === 'none') return;
  if (horns === 'curl') {
    shape(ctx, 'M-88 -174 Q-164 -178 -149 -251 Q-147 -269 -123 -275 Q-132 -229 -94 -215Z M82 -185 Q159 -189 147 -256 Q142 -272 123 -276 Q132 -233 88 -215Z', '#f4dca9', ink, 6);
    shape(ctx, 'M-131 -237 Q-123 -218 -107 -214 M130 -237 Q118 -219 103 -215', null, '#c49c73', 4);
  } else if (horns === 'short') {
    shape(ctx, 'M-105 -185 L-111 -252 Q-80 -248 -58 -209Z M83 -202 Q109 -254 139 -248 L132 -181Z', '#f8dfa1', ink, 6);
  } else if (horns === 'antler') {
    shape(ctx, 'M-98 -193 Q-117 -244 -144 -274 M-115 -236 L-155 -235 M-133 -256 L-130 -289 M89 -195 Q117 -249 135 -277 M111 -243 L160 -244 M123 -262 L119 -289', null, ink, 11);
    shape(ctx, 'M-98 -193 Q-117 -244 -144 -274 M-115 -236 L-155 -235 M-133 -256 L-130 -289 M89 -195 Q117 -249 135 -277 M111 -243 L160 -244 M123 -262 L119 -289', null, '#d4aa79', 5);
  } else if (horns === 'antenna') {
    shape(ctx, 'M-72 -193 Q-85 -248 -111 -260 M69 -193 Q87 -244 105 -256', null, ink, 7);
    ellipse(ctx, -111, -260, 14, 14, ink);
    ellipse(ctx, 105, -256, 14, 14, ink);
    ellipse(ctx, -111, -260, 9, 9, light);
    ellipse(ctx, 105, -256, 9, 9, light);
  } else {
    shape(ctx, 'M-84 -182 Q-160 -203 -164 -265 Q-106 -265 -72 -214Z M85 -191 Q96 -253 161 -266 Q157 -214 101 -187Z', '#87aa75', ink, 6);
    shape(ctx, 'M-84 -187 L-140 -248 M88 -192 L139 -244', null, '#d4e4ad', 4);
  }
}

function monsterMarkings(ctx, mark, base, outline, light) {
  if (mark === 'cheeks') {
    ellipse(ctx, -86, -84, 18, 11, '#d98983');
    ellipse(ctx, 86, -84, 18, 11, '#d98983');
  }
  if (mark === 'freckle') {
    for (const [x, y] of [[-92, -87], [-77, -79], [-67, -88], [73, -88], [85, -78], [97, -89]]) {
      ellipse(ctx, x, y, 4, 4, outline + 'a0');
    }
  }
  if (mark === 'stripe') {
    shape(ctx, 'M-116 -144 Q-98 -144 -88 -119 M-131 -114 Q-112 -109 -96 -89 M121 -149 Q101 -148 91 -124 M136 -113 Q113 -106 98 -91 M-27 -199 L-19 -179 M1 -204 L4 -181 M28 -199 L22 -177', null, outline + '80', 7);
  }
  if (mark === 'spot') {
    [[-106, -128, 11], [-88, -92, 10], [-96, -61, 12], [102, -126, 13], [83, -86, 8], [96, -59, 9], [19, -188, 13]].forEach(([x, y, size]) => ellipse(ctx, x, y, size, size, base + 'aa'));
  }
  if (mark === 'spark') {
    [[-99, -84, 12], [102, -81, 13], [-82, -50, 7], [90, -45, 7], [2, -183, 14]].forEach(([x, y, size]) => sparkle(ctx, x, y, size, light));
  }
}

function monsterEyes(ctx, kind, outline) {
  for (const x of kind === 'cyclops' ? [0] : [-47, 47]) {
    if (kind === 'sleepy') {
      shape(ctx, `M${x - 22} -129 Q${x} -105 ${x + 22} -129`, null, outline, 7);
      continue;
    }
    const width = kind === 'cyclops' ? 35 : 24;
    const height = kind === 'focus' ? 22 : kind === 'cyclops' ? 32 : 29;
    ellipse(ctx, x, -131, width, height, '#fcf4d3');
    if (kind === 'star') sparkle(ctx, x + 2, -131, 13, outline);
    else {
      ellipse(ctx, x + 4, -130, kind === 'cyclops' ? 15 : 10, 15, outline);
      ellipse(ctx, x + 8, -136, 4, 4, '#fffbdf');
      if (kind === 'focus') shape(ctx, `M${x - 21} -151 L${x + 18} -143`, null, outline, 6);
    }
  }
  shape(ctx, 'M-16 -86 Q-2 -70 18 -87 Q15 -62 0 -62 Q-13 -65 -16 -86Z', outline);
  shape(ctx, 'M-11 -82 L-4 -78 -8 -72Z M8 -78 L15 -83 12 -73Z', '#fff0cb');
}

function monsterAccessory(ctx, accessory, ink) {
  if (accessory === 'scarf') {
    shape(ctx, 'M-113 -46 Q-15 -2 119 -45 L112 -22 Q54 3 30 1 L55 46 27 51 7 7 Q-62 14 -115 -17Z', '#d68174', ink, 5);
    shape(ctx, 'M24 22 L41 17 M27 34 L48 28', null, '#f6cc9f', 4);
  }
  if (accessory === 'glasses') {
    shape(ctx, 'M-79 -132 A33 33 0 1 0 -13 -132 A33 33 0 1 0 -79 -132 M13 -132 A33 33 0 1 0 79 -132 A33 33 0 1 0 13 -132 M-13 -132 Q0 -144 13 -132 M79 -133 L108 -143 M-79 -133 L-108 -142', null, '#483f44', 8);
    shape(ctx, 'M-79 -132 A33 33 0 1 0 -13 -132 A33 33 0 1 0 -79 -132 M13 -132 A33 33 0 1 0 79 -132 A33 33 0 1 0 13 -132 M-13 -132 Q0 -144 13 -132', null, '#d6a764', 4);
  }
  if (accessory === 'headphones') {
    shape(ctx, 'M-122 -117 Q-132 -207 -67 -225 Q32 -250 91 -206 Q131 -178 122 -121', null, '#51466b', 11);
    shape(ctx, 'M-137 -132 Q-125 -146 -108 -134 L-106 -94 Q-122 -81 -140 -94Z M136 -132 Q124 -146 107 -134 L105 -94 Q120 -80 138 -94Z', '#a99acc', '#51466b', 5);
  }
  if (accessory === 'pack') {
    shape(ctx, 'M-104 -55 Q-105 -101 -87 -103 Q-70 -105 -60 -70 L-48 -20 -62 -15 -75 -69 Q-85 -95 -89 -67 L-87 -12 -104 -12Z M83 -69 Q100 -101 111 -93 Q128 -86 132 -52 L122 -48 Q111 -85 98 -63 L82 -18 65 -16Z', '#d6a46e', ink, 4);
  }
  if (accessory === 'wreath') {
    shape(ctx, 'M-103 -205 Q-1 -240 102 -203', null, '#49785b', 9);
    for (const [x, y] of [[-74, -214], [-42, -223], [-8, -225], [27, -223], [68, -215]]) {
      ellipse(ctx, x, y, 17, 10, '#82a674');
      sparkle(ctx, x, y - 6, 12, '#f1ac9e');
      ellipse(ctx, x, y - 6, 4, 4, '#f9ebaf');
    }
  }
  if (accessory === 'crown') {
    shape(ctx, 'M-61 -207 L-77 -256 -37 -237 0 -282 34 -237 75 -258 63 -207Z', '#f2cb73', '#785443', 5);
    shape(ctx, 'M-58 -215 Q1 -230 59 -215', null, '#fff0af', 5);
    sparkle(ctx, 0, -244, 11, '#d78d9e');
  }
  if (accessory === 'badge') {
    ellipse(ctx, 74, -21, 26, 26, '#755c57');
    ellipse(ctx, 74, -21, 21, 21, '#f7d98a');
    sparkle(ctx, 74, -21, 16, '#a36e69');
  }
}

function drawCustomMonster(ctx, look, level, giant) {
  const colors = monsterColors[look.color] ?? monsterColors.sage;
  const [light, shade, outline, glow] = colors;
  backdrop(ctx, habitats[look.home] ? look.home : 'meadow');
  const heights = [0.73, 0.81, 0.93, 1.02, 1.1, 1.17];
  const scale = heights[Math.min(heights.length, Math.max(1, level)) - 1];
  ellipse(ctx, 400, 413, 152 * scale * (giant ? 1.5 : 1), 20, '#22322c35');
  ctx.save();
  ctx.translate(400, 377);
  ctx.scale(scale * (giant ? 1.34 : 1.12), scale);
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';
  if (level >= 5 || giant) {
    shape(ctx, 'M-108 -31 Q-194 -33 -212 -105 Q-227 -172 -252 -187 Q-178 -197 -136 -135 L-122 -91Z M109 -37 Q198 -38 211 -106 Q225 -166 253 -186 Q181 -196 139 -136 L120 -93Z', shade, outline, 7);
    shape(ctx, 'M-202 -151 Q-166 -131 -140 -82 M204 -151 Q166 -131 140 -82', null, glow, 4);
  } else {
    shape(ctx, 'M-107 -71 Q-146 -95 -160 -74 Q-163 -63 -142 -46 L-111 -43Z M110 -75 Q142 -84 158 -109 Q175 -110 170 -90 Q167 -71 145 -53 L113 -46Z', shade, outline, 5);
  }
  monsterHorns(ctx, look.horns, outline, glow);
  shape(ctx, bodies[look.body] ?? bodies.blob, gradient(ctx, light, shade, [-100, -195], [111, 42]), outline, 7);
  if (look.body === 'mushroom') {
    shape(ctx, 'M-137 -168 Q-164 -186 -133 -216 Q-87 -268 -7 -260 Q71 -270 123 -230 Q168 -194 145 -170 Q126 -149 82 -171 Q11 -165 -50 -166 Q-104 -144 -137 -168Z', light, outline, 6);
    [[-98, -200, 13], [-50, -222, 11], [-12, -197, 15], [53, -229, 15], [98, -195, 10]].forEach(([x, y, size]) => ellipse(ctx, x, y, size, size * 0.72, glow));
  }
  ellipse(ctx, 0, -28, 59, 31, glow + 'a8');
  monsterMarkings(ctx, look.mark, glow, outline, glow);
  monsterEyes(ctx, look.eyes, outline);
  monsterAccessory(ctx, look.accessory, outline);
  if (level >= 6) {
    shape(ctx, 'M-98 -286 Q-43 -330 52 -319 Q128 -309 141 -275', null, glow, 5);
    sparkle(ctx, -74, -302, 14, '#f8e6b1');
    sparkle(ctx, 90, -306, 16, '#f8e6b1');
  }
  ctx.restore();
  grain(ctx, 263, 0.23);
}

const extraCovers = {
  court: ['#ecd8b8', '#c78362', '#803b52', '#fff1ce'],
  signal: ['#e8e4fb', '#aca3db', '#535180', '#e2edbb'],
  lab: ['#e1efc6', '#91bcb0', '#416b69', '#fcf3cc'],
  stage: ['#eed6df', '#ad7189', '#65456f', '#ffe6bc'],
  kite: ['#dbedf0', '#88b8ca', '#556f9d', '#fff0af'],
  city: ['#dce0f7', '#8a86c8', '#424572', '#ffeab9'],
  map: ['#efe2b8', '#b8aa7e', '#56746e', '#ffffd4']
};

function extraCover(ctx, theme) {
  const [light, fade, dark, accent] = extraCovers[theme];
  ctx.fillStyle = gradient(ctx, light, fade, [0, 0], [800, 480]);
  ctx.fillRect(0, 0, 800, 480);
  ellipse(ctx, 579, 149, 108, 108, accent + '9d');
  shape(ctx, 'M0 337 Q260 248 419 348 Q624 433 800 304 V480 H0Z', dark + '70');
  shape(ctx, 'M0 440 Q270 337 421 410 Q617 476 800 404V480 H0Z', dark + '98');
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  if (theme === 'court') {
    shape(ctx, 'M186 363 L310 135 661 148 553 391Z M252 247 L614 265 M352 375 L477 140', null, accent, 6);
    ellipse(ctx, 475, 263, 93, 93, '#d48754');
    shape(ctx, 'M390 236 Q450 241 510 347 M467 172 Q511 245 559 271 M405 322 Q472 287 543 201', null, '#62464b', 8);
  } else if (theme === 'signal') {
    shape(ctx, 'M312 61 L504 72 Q531 74 528 109 L515 412 Q514 435 483 435 L301 422 Q274 419 279 388L292 94 Q295 59 312 61Z', dark, '#42374d', 6);
    shape(ctx, 'M314 99 L505 108 491 388 305 378Z', '#e2dcf1');
    shape(ctx, 'M343 184 L446 192 440 293 340 286Z M369 213 L413 241 365 261Z', fade, dark, 5);
    shape(ctx, 'M330 321 L458 327 M327 346 L422 354 M567 152 Q607 197 567 250 M605 111 Q680 185 613 284', null, accent, 10);
  } else if (theme === 'lab') {
    shape(ctx, 'M286 136 L373 136 371 228 424 322 Q443 356 407 373 L246 373 Q213 356 234 321 L286 227Z', '#edf5cd', dark, 7);
    shape(ctx, 'M248 311 Q289 293 332 310 T412 318 L430 349 409 367 H244 L226 349Z', '#82bca7');
    shape(ctx, 'M511 98 L533 98 V286 Q568 318 532 342 Q491 344 492 315 Q491 296 511 284Z', '#f7d2bf', dark, 7);
    shape(ctx, 'M522 182 V312 M521 151 H537 M521 124 H537', null, '#ae6f79', 6);
  } else if (theme === 'stage') {
    shape(ctx, 'M155 0 H333 L264 380 73 380Z M800 0 H634 L749 380H800Z', '#9e5977', '#744767', 4);
    shape(ctx, 'M372 351 Q426 352 456 270 L458 243 M398 379 H516', null, '#544467', 15);
    shape(ctx, 'M429 248 Q410 225 430 198 L463 162 Q486 137 510 162 Q530 184 509 214 L476 247 Q450 273 429 248Z', accent, dark, 7);
    shape(ctx, 'M450 191 L491 223 M465 173 L504 204', null, '#ad7283', 6);
  } else if (theme === 'kite') {
    shape(ctx, 'M520 57 L621 168 451 303 343 142Z M520 57 L451 303 M343 142 L621 168', '#edbb89', dark, 7);
    shape(ctx, 'M451 303 C458 400 323 332 339 411 Q337 456 268 463', null, '#fff3ce', 7);
    shape(ctx, 'M392 369 L364 349 350 385Z M339 418 L308 391 301 430Z', accent, dark, 4);
  } else if (theme === 'city') {
    for (let n = 0; n < 7; n += 1) {
      const x = 94 + n * 89;
      const y = 173 + n * 53 % 120;
      shape(ctx, `M${x} ${y} h73 V422 h-73Z`, dark);
      for (let row = y + 25; row < 404; row += 38) for (const column of [x + 13, x + 41]) ellipse(ctx, column, row, 7, 8, accent);
    }
    shape(ctx, 'M93 208 Q281 317 442 213 Q582 119 710 235', null, '#ede3c6', 5);
  } else {
    shape(ctx, 'M196 167 L316 101 466 136 590 96 622 331 494 390 354 361 221 399Z', '#f1deb1', dark, 7);
    shape(ctx, 'M316 103 L355 360 M466 136 L493 390 M266 315 Q364 251 439 308 Q501 318 548 183', null, '#6e9fa4', 8);
    ctx.setLineDash([9, 10]);
    shape(ctx, 'M252 226 Q336 174 405 205 Q485 242 536 170', null, '#946c58', 6);
    ctx.setLineDash([]);
    ellipse(ctx, 538, 169, 11, 11, '#946c58');
  }
  [[110, 119, 14], [676, 139, 9], [640, 326, 13], [160, 347, 7]].forEach(([x, y, size]) => sparkle(ctx, x, y, size, accent));
  grain(ctx, 78, 0.27);
}
