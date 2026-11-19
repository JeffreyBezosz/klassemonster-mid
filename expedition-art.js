function expeditionSky(ctx, dusk = false) {
  ctx.fillStyle = gradient(ctx, dusk ? '#d6c7e2' : '#edebc7', dusk ? '#776fa5' : '#99b9a2', [40, 0], [800, 480]);
  ctx.fillRect(0, 0, 800, 480);
  ellipse(ctx, 625, 102, 70, 70, '#faebba');
  ellipse(ctx, 625, 102, 96, 96, '#faebba40');
  shape(ctx, 'M0 277 Q159 185 321 255 Q449 310 568 248 Q666 192 800 223 V480 H0Z', dusk ? '#777aa3' : '#9aae91');
  shape(ctx, 'M0 359 Q128 250 313 309 Q481 384 631 288 Q739 235 800 268 V480 H0Z', dusk ? '#5b6b86' : '#678e7d');
  shape(ctx, 'M0 414 Q250 329 473 411 Q684 474 800 373 V480 H0Z', dusk ? '#48655f' : '#557667');
  [[69, 317, 0.9], [119, 338, 0.62], [184, 331, 0.84], [688, 344, 0.94], [751, 343, 1.32], [789, 365, 0.84]]
    .forEach(([x, y, scale]) => pine(ctx, x, y, scale, dusk ? '#41566b' : '#54816f'));
  [[114, 104, 10], [234, 175, 8], [523, 90, 9], [720, 155, 11], [661, 244, 7]].forEach(([x, y, size]) => sparkle(ctx, x, y, size, '#f9edbc'));
}

function fern(ctx, x, y, scale, shade) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(scale, Math.abs(scale));
  shape(ctx, 'M0 0 Q-4 -40 1 -103 M1 -8 Q29 -41 53 -49 M0 -29 Q-30 -55 -56 -68', null, '#2f5749', 5);
  shape(ctx, 'M3 -43 Q-16 -66 -7 -93 Q10 -81 9 -57Z M1 -31 Q22 -75 45 -72 Q42 -43 8 -35Z M-7 -23 Q-48 -38 -60 -58 Q-35 -65 -5 -45Z M15 -19 Q34 -48 57 -47 Q51 -24 15 -19Z', shade, '#3f6a54', 3.5);
  ctx.restore();
}

function campArt(ctx) {
  expeditionSky(ctx, true);
  shape(ctx, 'M109 480 Q137 404 251 379 Q412 302 599 375 Q684 408 742 480Z', '#294c43');
  shape(ctx, 'M279 404 Q275 341 380 323 Q463 300 545 331 Q597 354 596 391 L555 435 323 438Z', '#769183', '#456457', 7);
  shape(ctx, 'M318 400 Q372 417 456 413 Q537 410 582 373', null, '#abc1a0', 5);
  ellipse(ctx, 449, 358, 125, 43, '#6b7354');
  for (let index = 0; index < 8; index += 1) {
    shape(ctx, `M${335 + index * 7} ${349 + index * 4} Q455 ${303 + index * 11} ${556 + index * 3} ${348 + index * 4}`, null, ['#8e9366', '#b1a674', '#c4ab75'][index % 3], 5);
  }
  const shell = gradient(ctx, '#a7d1a3', '#577f75', [397, 190], [512, 368]);
  shape(ctx, 'M388 328 Q367 285 401 224 Q429 175 458 172 Q494 172 521 217 Q553 268 532 323 Q515 366 457 370 Q413 365 388 328Z', shell, '#274e4a', 8);
  [[417, 279, 13], [453, 241, 8], [483, 295, 14], [510, 255, 8], [447, 331, 22], [494, 343, 7]].forEach(([x, y, size]) => ellipse(ctx, x, y, size, size * 0.67, '#dcac93'));
  shape(ctx, 'M463 179 L443 211 465 220 448 248 462 252', null, '#eff1c8', 5);
  fern(ctx, 333, 404, 0.9, '#86a673');
  fern(ctx, 588, 409, -1.07, '#b7bd80');
  fern(ctx, 662, 474, 1.5, '#6a967a');
  fern(ctx, 149, 489, -1.55, '#719b78');
  [[386, 183, 15], [536, 192, 13], [574, 293, 8], [331, 238, 9]].forEach(([x, y, size]) => sparkle(ctx, x, y, size, '#f4efbc'));
  grain(ctx, 41, 0.29);
}

function trailArt(ctx) {
  expeditionSky(ctx, true);
  shape(ctx, 'M164 480 Q239 398 314 358 Q416 315 443 280 Q459 260 485 243 Q507 233 581 228 Q518 245 505 268 Q473 317 417 359 Q383 393 367 480Z', '#8d9fc1', '#737fa6', 7);
  shape(ctx, 'M326 431 Q363 387 401 373 M433 347 Q489 303 493 277 M491 255 Q516 244 540 241', null, '#d2c7db', 5);
  shape(ctx, 'M214 402 Q184 339 251 294 Q285 267 382 259 Q440 258 453 218', null, '#c0ae8c', 21);
  shape(ctx, 'M214 402 Q184 339 251 294 Q285 267 382 259 Q440 258 453 218', null, '#e0c99d', 11);
  shape(ctx, 'M352 296 Q395 263 503 267 L524 293 Q445 287 373 314Z', '#a77e64', '#514c58', 7);
  shape(ctx, 'M358 302 L440 237 Q484 227 516 264 M375 299 L374 275 M412 285 L413 257 M456 275 L456 234 M496 278 L498 248', null, '#4f444a', 6);
  shape(ctx, 'M339 273 L319 340 M328 277 L315 259 320 234 344 229 354 253 349 273Z', '#8c5f59', '#554349', 6);
  ellipse(ctx, 336, 251, 37, 37, '#ed8d8773');
  ellipse(ctx, 336, 251, 13, 13, '#f09e87');
  [[217, 365, 13], [228, 325, 6], [257, 300, 8]].forEach(([x, y, size]) => sparkle(ctx, x, y, size, '#f8efbb'));
  fern(ctx, 180, 478, -1.15, '#789a80');
  fern(ctx, 724, 450, 1.6, '#6d957f');
  grain(ctx, 77, 0.27);
}

function clueArt(ctx) {
  ctx.fillStyle = gradient(ctx, '#ede7bd', '#a99bc4', [12, 54], [800, 480]);
  ctx.fillRect(0, 0, 800, 480);
  shape(ctx, 'M0 357 Q238 262 444 366 T800 369 V480 H0Z', '#7c817a');
  ellipse(ctx, 400, 381, 218, 49, '#403b5044');
  ctx.save();
  ctx.translate(393, 242);
  ctx.rotate(-0.09);
  shape(ctx, 'M-197 -95 Q-98 -126 0 -82 Q103 -123 198 -95 V124 Q94 97 0 146 Q-89 103 -197 124Z', '#47746e', '#394d51', 7);
  shape(ctx, 'M-183 -103 Q-82 -127 0 -86 Q95 -132 182 -108 V105 Q100 85 0 129 Q-90 87 -183 108Z', '#f9e8be', '#856a63', 5);
  shape(ctx, 'M0 -87 V129 M-162 -66 Q-83 -91 -26 -60 M-161 -42 Q-76 -63 -26 -42 M-157 -18 Q-74 -42 -28 -20 M-154 13 Q-72 -14 -24 7 M-154 41 Q-70 17 -24 39', null, '#b79579', 4);
  shape(ctx, 'M28 50 Q76 -18 121 0 Q154 13 151 -58 M33 77 Q91 31 166 64', null, '#678e9b', 8);
  ellipse(ctx, 119, 0, 17, 17, '#aa6c70');
  ellipse(ctx, 119, 0, 7, 7, '#ffd1a6');
  ctx.restore();
  ellipse(ctx, 557, 235, 68, 68, '#e1edba74');
  shape(ctx, 'M489 235 A68 68 0 1 0 625 235 A68 68 0 1 0 489 235Z M606 289 L669 356', null, '#3c5961', 13);
  [[133, 153, 13], [228, 104, 8], [666, 143, 11], [689, 251, 8]].forEach(([x, y, size]) => sparkle(ctx, x, y, size, '#fff1c7'));
  fern(ctx, 138, 448, -0.82, '#a5ac7c');
  grain(ctx, 34, 0.27);
}

function foregroundArt(ctx) {
  shape(ctx, 'M0 480 V392 Q96 429 156 457 Q268 423 344 465 Q530 430 634 448 Q711 402 800 386 V480Z', '#345d47e8');
  fern(ctx, 120, 469, 1.32, '#97bd83');
  fern(ctx, 703, 467, -1.52, '#8eab7e');
  fern(ctx, 47, 472, -0.94, '#b0b983');
  [[183, 393, 10], [677, 376, 9], [743, 336, 7], [114, 336, 8]].forEach(([x, y, size]) => sparkle(ctx, x, y, size, '#eee7b5'));
}

const expeditionArt = { camp: campArt, trail: trailArt, clue: clueArt, forefront: foregroundArt };
