# Chiptune recipes

Eight patches that use fast arpeggios, narrow note ranges, hard edges, and tracker-like arrangements.

## Pocket Overworld

A deterministic, self-playing chiptune patch with seeded melody, harmony, bass, drums, and a complete automatic arrangement.

1. **Start — SAVE > PROJECT:** set **KNOB 1 New song**, press **OCT+**, and confirm with **OCT+** if asked. On **NEW SONG**, set **KNOB 1 ROOT C**, **KNOB 2 SCALE PEN (Major pentatonic)**, and **KNOB 3 TEMPO 150 BPM**; press **OCT+**. Set role **KNOBS 1–4 KEEP** and press **OCT+** to create.
2. **Sounds — HOME:** turn **ALGORITHM** to each track and set **PRESETS** to T1 **BELLS**, T2 **TINE EP**, T3 **SUB BASS**, and T4 **808 KIT**.
3. **T1 melody — ALGORITHM T1 > SEQ > GEN:** **KNOB 1 MODE MARKOV**, **KNOB 2 LEAP 30%**, **KNOB 3 DENS 38%**, and **KNOB 4 SPAN 1 octave**. **SEQ > PATTERN:** **KNOB 1 LEN 16**, **KNOB 2 DIV 1/8**, **KNOB 3 SWING 12%**, **KNOB 4 GATE 64**. **ARP > EVOLVE:** **KNOB 2 EVERY OFF**, **KNOB 4 ROLL 117**.
4. **T2 harmony — ALGORITHM T2 > SEQ > GEN:** **KNOB 1 MODE CHORD**, **KNOB 2 PROG POP**, **KNOB 3 BARS 2**, **KNOB 4 HIT HOLD**. **SCL > CHORD:** **KNOB 1 CHRD DIA7**, **KNOB 2 VOIC OPEN**. **ARP > EVOLVE:** **KNOB 2 EVERY OFF**, **KNOB 4 ROLL 18**.
5. **T3 bass — ALGORITHM T3 > SEQ > GEN:** **KNOB 1 MODE EUCLID**, **KNOB 2 STEPS 16**, **KNOB 3 PULSE 6**, **KNOB 4 ROT 2**. **ARP > TWEAK:** **KNOB 4 FOLLOW T2**; hold **OCT-** and set **KNOB 2 HOW BASS**, **KNOB 3 RHYTHM OWN**. **ARP > EVOLVE:** **KNOB 2 EVERY OFF**, **KNOB 4 ROLL 46**. **T4 drums — ALGORITHM T4 > SEQ > GEN:** **KNOB 1 MODE ATLAS**, **KNOB 2 X 87**, **KNOB 3 Y 88**, **KNOB 4 DENS 48%**. **ARP > TWEAK:** **KNOB 3 HUMAN 16%**. **ARP > EVOLVE:** **KNOB 2 EVERY OFF**, **KNOB 4 ROLL 74**.
6. **Space and motion — ALGORITHM T1 > FX > FX 2:** **KNOB 1 TYPE ECHO**, **KNOB 2 MIX 29**, **KNOB 3 TIME 70**, **KNOB 4 REPEAT 50**. **ALGORITHM T2 > LFO > ORGANIC:** **KNOB 1 SPEED 50**. **LFO > MODS:** select unused **M1** with **KNOB 2**; set **KNOB 1 SOURCE T2 TIDE 1**, **KNOB 3 DESTINATION T2 CUTOFF**, **KNOB 4 AMOUNT +17%**.
7. **Arrangement — GLO > CHAIN:** **KNOB 1 FORM AB**, **KNOB 2 PHRASE 8 bars**, **KNOB 3 WANDER 0%**. **GLO > ENTRIES:** **KNOB 1 ENTRIES 55%**, **KNOB 2 DWELL 2 phrases**, **KNOB 3 STYLE FADE**, **KNOB 4 FADE 2 bars**. **Ending — GLO > PIECE:** **KNOB 1 LENGTH 10 MIN**, **KNOB 2 SHAPE RISE**, **KNOB 3 PEAK 65%**, **KNOB 4 END STOP**. Press **PLAY** once; Tessera performs and stops by itself.

## One-Channel Chords

A deterministic, self-playing chiptune patch with seeded melody, harmony, bass, drums, and a complete automatic arrangement.

1. **Start — SAVE > PROJECT:** set **KNOB 1 New song**, press **OCT+**, and confirm with **OCT+** if asked. On **NEW SONG**, set **KNOB 1 ROOT C**, **KNOB 2 SCALE MIN (Natural minor)**, and **KNOB 3 TEMPO 140 BPM**; press **OCT+**. Set role **KNOBS 1–4 KEEP** and press **OCT+** to create. **Sounds — HOME:** turn **ALGORITHM** to each track and set **PRESETS** to T1 **BELLS**, T2 **TINE EP**, T3 **SUB BASS**, and T4 **808 KIT**.
2. **T1 melody — ALGORITHM T1 > SEQ > GEN:** **KNOB 1 MODE BOUNCE**, **KNOB 2 SPEED 17**, **KNOB 3 ANGLE 52°**, and **KNOB 4 BALLS 4**. **SEQ > PATTERN:** **KNOB 1 LEN 16**, **KNOB 2 DIV 1/8**, **KNOB 3 SWING 12%**, **KNOB 4 GATE 64**. **ARP > EVOLVE:** **KNOB 2 EVERY OFF**, **KNOB 4 ROLL 60**.
3. **T2 harmony — ALGORITHM T2 > SEQ > GEN:** **KNOB 1 MODE CHORD**, **KNOB 2 PROG CIRCLE**, **KNOB 3 BARS 1**, **KNOB 4 HIT HOLD**. Keep **OCT-** held on GEN and set **KNOB 2 STRUM 42 ms** and **KNOB 3 DIR UP** (**Tessera 3.5+**), then release it. **SCL > CHORD:** **KNOB 1 CHRD DIA7**, **KNOB 2 VOIC OPEN**. **ARP > EVOLVE:** **KNOB 2 EVERY OFF**, **KNOB 4 ROLL 89**.
4. **T3 bass — ALGORITHM T3 > SEQ > GEN:** **KNOB 1 MODE EUCLID**, **KNOB 2 STEPS 16**, **KNOB 3 PULSE 6**, **KNOB 4 ROT 1**. **ARP > TWEAK:** **KNOB 4 FOLLOW T2**; hold **OCT-** and set **KNOB 2 HOW BASS**, **KNOB 3 RHYTHM OWN**. **ARP > EVOLVE:** **KNOB 2 EVERY OFF**, **KNOB 4 ROLL 117**. **T4 drums — ALGORITHM T4 > SEQ > GEN:** **KNOB 1 MODE ATLAS**, **KNOB 2 X 116**, **KNOB 3 Y 117**, **KNOB 4 DENS 59%**. **ARP > TWEAK:** **KNOB 3 HUMAN 17%**. **ARP > EVOLVE:** **KNOB 2 EVERY OFF**, **KNOB 4 ROLL 17**.
5. **Space and motion — ALGORITHM T1 > FX > FX 2:** **KNOB 1 TYPE ECHO**, **KNOB 2 MIX 17**, **KNOB 3 TIME 46**, **KNOB 4 REPEAT 33**. **ALGORITHM T2 > LFO > ORGANIC:** **KNOB 1 SPEED 50**. **LFO > MODS:** select unused **M1** with **KNOB 2**; set **KNOB 1 SOURCE T2 TIDE 1**, **KNOB 3 DESTINATION T2 CUTOFF**, **KNOB 4 AMOUNT +17%**. **Arrangement — GLO > CHAIN:** **KNOB 1 FORM ABCA**, **KNOB 2 PHRASE 8 bars**, **KNOB 3 WANDER 0%**. **GLO > ENTRIES:** **KNOB 1 ENTRIES 55%**, **KNOB 2 DWELL 2 phrases**, **KNOB 3 STYLE FADE**, **KNOB 4 FADE 2 bars**. **Ending — GLO > PIECE:** **KNOB 1 LENGTH 10 MIN**, **KNOB 2 SHAPE WAVES**, **KNOB 3 COUNT 3**, **KNOB 4 END STOP**. Press **PLAY** once; Tessera performs and stops by itself.

## Boss Room Countdown

A deterministic, self-playing chiptune patch with seeded melody, harmony, bass, drums, and a complete automatic arrangement.

1. **Start — SAVE > PROJECT:** set **KNOB 1 New song**, press **OCT+**, and confirm with **OCT+** if asked. On **NEW SONG**, set **KNOB 1 ROOT C**, **KNOB 2 SCALE MIN (Natural minor)**, and **KNOB 3 TEMPO 165 BPM**; press **OCT+**. Set role **KNOBS 1–4 KEEP** and press **OCT+** to create. **Sounds — HOME:** set T1 **BELLS** and T4 **808 KIT** with **ALGORITHM + PRESETS**. Leave T2/T3 empty in **MODE STEP**; they will stay silent.
2. **T1 melody — ALGORITHM T1 > SEQ > GEN:** **KNOB 1 MODE CONSTL**, **KNOB 2 Y 5**, **KNOB 3 DENS 32%**, and **KNOB 4 SPEED 1/8**. **SEQ > PATTERN:** **KNOB 1 LEN 16**, **KNOB 2 DIV 1/8**, **KNOB 3 SWING 12%**, **KNOB 4 GATE 64**. **ARP > EVOLVE:** **KNOB 2 EVERY OFF**, **KNOB 4 ROLL 96**. **ARP > FORM:** **KNOB 1 FORM AB**, **KNOB 2 CONTR 18%**. Return to **ARP > EVOLVE** and change **KNOB 2 EVERY** to **8 bars**.
3. **T4 drums — ALGORITHM T4 > SEQ > GEN:** **KNOB 1 MODE ATLAS**, **KNOB 2 X 106**, **KNOB 3 Y 107**, **KNOB 4 DENS 35%**. **ARP > TWEAK:** **KNOB 3 HUMAN 15%**. **ARP > EVOLVE:** **KNOB 2 EVERY OFF**, **KNOB 4 ROLL 53**. **ALGORITHM T1 > FX > FX 2:** **KNOB 1 TYPE ECHO**, **KNOB 2 MIX 12**, **KNOB 3 TIME 66**, **KNOB 4 REPEAT 56**.
4. **Automatic movement — ALGORITHM T1 > ARP > ENERGY:** **KNOB 1 ARC 35%**, **KNOB 2 RESTS 0%**, **KNOB 3 LEVEL 0**. **Ending — GLO > PIECE:** **KNOB 1 LENGTH 8 MIN**, **KNOB 2 SHAPE WAVES**, **KNOB 3 COUNT 3**, **KNOB 4 END STOP**. Press **PLAY** once; Tessera performs and stops by itself.

## Save-Point Glow

A deterministic, self-playing chiptune patch with seeded melody, harmony, bass, drums, and a complete automatic arrangement.

1. **Start — SAVE > PROJECT:** set **KNOB 1 New song**, press **OCT+**, and confirm with **OCT+** if asked. On **NEW SONG**, set **KNOB 1 ROOT C**, **KNOB 2 SCALE MAJ (Major)**, and **KNOB 3 TEMPO 90 BPM**; press **OCT+**. Set role **KNOBS 1–4 KEEP** and press **OCT+** to create.
2. **Sounds — HOME:** turn **ALGORITHM** to each track and set **PRESETS** to T1 **BELLS**, T2 **TINE EP**, T3 **SUB BASS**, and T4 **808 KIT**.
3. **T1 melody — ALGORITHM T1 > SEQ > GEN:** **KNOB 1 MODE CONSTL**, **KNOB 2 Y 5**, **KNOB 3 DENS 38%**, and **KNOB 4 SPEED 1/16**. **SEQ > PATTERN:** **KNOB 1 LEN 16**, **KNOB 2 DIV 1/16**, **KNOB 3 SWING 12%**, **KNOB 4 GATE 64**. **ARP > EVOLVE:** **KNOB 2 EVERY OFF**, **KNOB 4 ROLL 78**.
4. **T2 harmony — ALGORITHM T2 > SEQ > GEN:** **KNOB 1 MODE CHORD**, **KNOB 2 PROG TWO**, **KNOB 3 BARS 1**, **KNOB 4 HIT HOLD**. **SCL > CHORD:** **KNOB 1 CHRD DIA7**, **KNOB 2 VOIC OPEN**. **ARP > EVOLVE:** **KNOB 2 EVERY OFF**, **KNOB 4 ROLL 107**.
5. **T3 bass — ALGORITHM T3 > SEQ > GEN:** **KNOB 1 MODE EUCLID**, **KNOB 2 STEPS 16**, **KNOB 3 PULSE 5**, **KNOB 4 ROT 3**. **ARP > TWEAK:** **KNOB 4 FOLLOW T2**; hold **OCT-** and set **KNOB 2 HOW BASS**, **KNOB 3 RHYTHM OWN**. **ARP > EVOLVE:** **KNOB 2 EVERY OFF**, **KNOB 4 ROLL 7**. **T4 drums — ALGORITHM T4 > SEQ > GEN:** **KNOB 1 MODE ATLAS**, **KNOB 2 X 185**, **KNOB 3 Y 186**, **KNOB 4 DENS 57%**. **ARP > TWEAK:** **KNOB 3 HUMAN 21%**. **ARP > EVOLVE:** **KNOB 2 EVERY OFF**, **KNOB 4 ROLL 35**.
6. **Space and motion — ALGORITHM T1 > FX > FX 2:** **KNOB 1 TYPE ECHO**, **KNOB 2 MIX 25**, **KNOB 3 TIME 47**, **KNOB 4 REPEAT 57**. **ALGORITHM T2 > LFO > ORGANIC:** **KNOB 1 SPEED 50**. **LFO > MODS:** select unused **M1** with **KNOB 2**; set **KNOB 1 SOURCE T2 TIDE 1**, **KNOB 3 DESTINATION T2 CUTOFF**, **KNOB 4 AMOUNT +21%**.
7. **Arrangement — GLO > CHAIN:** **KNOB 1 FORM ABAC**, **KNOB 2 PHRASE 8 bars**, **KNOB 3 WANDER 0%**. **GLO > ENTRIES:** **KNOB 1 ENTRIES 55%**, **KNOB 2 DWELL 2 phrases**, **KNOB 3 STYLE FADE**, **KNOB 4 FADE 2 bars**. **Ending — GLO > PIECE:** **KNOB 1 LENGTH 10 MIN**, **KNOB 2 SHAPE ARCH**, **KNOB 3 PEAK 65%**, **KNOB 4 END STOP**. Press **PLAY** once; Tessera performs and stops by itself.

## Tracker Staircase

A deterministic, self-playing chiptune patch with seeded melody, harmony, bass, drums, and a complete automatic arrangement.

1. **Start — SAVE > PROJECT:** set **KNOB 1 New song**, press **OCT+**, and confirm with **OCT+** if asked. On **NEW SONG**, set **KNOB 1 ROOT C**, **KNOB 2 SCALE MPEN (Minor pentatonic)**, and **KNOB 3 TEMPO 145 BPM**; press **OCT+**. Set role **KNOBS 1–4 KEEP** and press **OCT+** to create. **Sounds — HOME:** turn **ALGORITHM** to each track and set **PRESETS** to T1 **BELLS**, T2 **TINE EP**, T3 **SUB BASS**, and T4 **808 KIT**.
2. **T1 melody — ALGORITHM T1 > SEQ > GEN:** **KNOB 1 MODE TURING**, **KNOB 2 LENGTH 9**, **KNOB 3 PROB 7%**, and **KNOB 4 SPAN 2 octaves**. **SEQ > PATTERN:** **KNOB 1 LEN 16**, **KNOB 2 DIV 1/16**, **KNOB 3 SWING 12%**, **KNOB 4 GATE 64**. **ARP > EVOLVE:** **KNOB 2 EVERY OFF**, **KNOB 4 ROLL 18**.
3. **T2 harmony — ALGORITHM T2 > SEQ > GEN:** **KNOB 1 MODE CHORD**, **KNOB 2 PROG DRONE**, **KNOB 3 BARS 1**, **KNOB 4 HIT HOLD**. **SCL > CHORD:** **KNOB 1 CHRD DIA7**, **KNOB 2 VOIC OPEN**. **ARP > EVOLVE:** **KNOB 2 EVERY OFF**, **KNOB 4 ROLL 47**.
4. **T3 bass — ALGORITHM T3 > SEQ > GEN:** **KNOB 1 MODE EUCLID**, **KNOB 2 STEPS 16**, **KNOB 3 PULSE 5**, **KNOB 4 ROT 7**. **ARP > TWEAK:** **KNOB 4 FOLLOW T2**; hold **OCT-** and set **KNOB 2 HOW BASS**, **KNOB 3 RHYTHM OWN**. **ARP > EVOLVE:** **KNOB 2 EVERY OFF**, **KNOB 4 ROLL 75**.
5. **T4 drums — ALGORITHM T4 > SEQ > GEN:** **KNOB 1 MODE ATLAS**, **KNOB 2 X 76**, **KNOB 3 Y 77**, **KNOB 4 DENS 51%**. **ARP > TWEAK:** **KNOB 3 HUMAN 15%**. **ARP > EVOLVE:** **KNOB 2 EVERY OFF**, **KNOB 4 ROLL 103**. **Space and motion — ALGORITHM T1 > FX > FX 2:** **KNOB 1 TYPE ECHO**, **KNOB 2 MIX 16**, **KNOB 3 TIME 45**, **KNOB 4 REPEAT 31**. **ALGORITHM T2 > LFO > ORGANIC:** **KNOB 1 SPEED 50**. **LFO > MODS:** select unused **M1** with **KNOB 2**; set **KNOB 1 SOURCE T2 TIDE 1**, **KNOB 3 DESTINATION T2 CUTOFF**, **KNOB 4 AMOUNT +28%**.
6. **Arrangement — GLO > CHAIN:** **KNOB 1 FORM ABAC**, **KNOB 2 PHRASE 8 bars**, **KNOB 3 WANDER 0%**. **GLO > ENTRIES:** **KNOB 1 ENTRIES 55%**, **KNOB 2 DWELL 2 phrases**, **KNOB 3 STYLE FADE**, **KNOB 4 FADE 2 bars**. **Ending — GLO > PIECE:** **KNOB 1 LENGTH 8 MIN**, **KNOB 2 SHAPE ARCH**, **KNOB 3 PEAK 65%**, **KNOB 4 END STOP**. Press **PLAY** once; Tessera performs and stops by itself.

## Eight-Bit Airship

A deterministic, self-playing chiptune patch with seeded melody, harmony, bass, drums, and a complete automatic arrangement.

1. **Start — SAVE > PROJECT:** set **KNOB 1 New song**, press **OCT+**, and confirm with **OCT+** if asked. On **NEW SONG**, set **KNOB 1 ROOT C**, **KNOB 2 SCALE MAJ (Major)**, and **KNOB 3 TEMPO 138 BPM**; press **OCT+**. Set role **KNOBS 1–4 KEEP** and press **OCT+** to create.
2. **Sounds — HOME:** turn **ALGORITHM** to each track and set **PRESETS** to T1 **BELLS**, T2 **TINE EP**, T3 **SUB BASS**, and T4 **808 KIT**.
3. **T1 melody — ALGORITHM T1 > SEQ > GEN:** **KNOB 1 MODE BOUNCE**, **KNOB 2 SPEED 14**, **KNOB 3 ANGLE 58°**, and **KNOB 4 BALLS 2**. **SEQ > PATTERN:** **KNOB 1 LEN 16**, **KNOB 2 DIV 1/16**, **KNOB 3 SWING 12%**, **KNOB 4 GATE 64**. **ARP > EVOLVE:** **KNOB 2 EVERY OFF**, **KNOB 4 ROLL 22**.
4. **T2 harmony — ALGORITHM T2 > SEQ > GEN:** **KNOB 1 MODE CHORD**, **KNOB 2 PROG WALK**, **KNOB 3 BARS 1**, **KNOB 4 HIT HOLD**. **SCL > CHORD:** **KNOB 1 CHRD DIA7**, **KNOB 2 VOIC OPEN**. **ARP > EVOLVE:** **KNOB 2 EVERY OFF**, **KNOB 4 ROLL 51**.
5. **T3 bass — ALGORITHM T3 > SEQ > GEN:** **KNOB 1 MODE EUCLID**, **KNOB 2 STEPS 16**, **KNOB 3 PULSE 3**, **KNOB 4 ROT 3**. **ARP > TWEAK:** **KNOB 4 FOLLOW T2**; hold **OCT-** and set **KNOB 2 HOW BASS**, **KNOB 3 RHYTHM OWN**. **ARP > EVOLVE:** **KNOB 2 EVERY OFF**, **KNOB 4 ROLL 79**. **T4 drums — ALGORITHM T4 > SEQ > GEN:** **KNOB 1 MODE ATLAS**, **KNOB 2 X 182**, **KNOB 3 Y 183**, **KNOB 4 DENS 47%**. **ARP > TWEAK:** **KNOB 3 HUMAN 23%**. **ARP > EVOLVE:** **KNOB 2 EVERY OFF**, **KNOB 4 ROLL 107**.
6. **Space and motion — ALGORITHM T1 > FX > FX 2:** **KNOB 1 TYPE ECHO**, **KNOB 2 MIX 21**, **KNOB 3 TIME 62**, **KNOB 4 REPEAT 38**. **ALGORITHM T2 > LFO > ORGANIC:** **KNOB 1 SPEED 50**. **LFO > MODS:** select unused **M1** with **KNOB 2**; set **KNOB 1 SOURCE T2 TIDE 1**, **KNOB 3 DESTINATION T2 CUTOFF**, **KNOB 4 AMOUNT +21%**.
7. **Arrangement — GLO > CHAIN:** **KNOB 1 FORM ABAC**, **KNOB 2 PHRASE 8 bars**, **KNOB 3 WANDER 0%**. **GLO > ENTRIES:** **KNOB 1 ENTRIES 55%**, **KNOB 2 DWELL 2 phrases**, **KNOB 3 STYLE FADE**, **KNOB 4 FADE 2 bars**. **Ending — GLO > PIECE:** **KNOB 1 LENGTH 10 MIN**, **KNOB 2 SHAPE ARCH**, **KNOB 3 PEAK 65%**, **KNOB 4 END STOP**. Press **PLAY** once; Tessera performs and stops by itself.

## Dungeon Torch

A deterministic, self-playing chiptune patch with seeded melody, harmony, bass, drums, and a complete automatic arrangement.

1. **Start — SAVE > PROJECT:** set **KNOB 1 New song**, press **OCT+**, and confirm with **OCT+** if asked. On **NEW SONG**, set **KNOB 1 ROOT C**, **KNOB 2 SCALE MIN (Natural minor)**, and **KNOB 3 TEMPO 112 BPM**; press **OCT+**. Set role **KNOBS 1–4 KEEP** and press **OCT+** to create.
2. **Sounds — HOME:** turn **ALGORITHM** to each track and set **PRESETS** to T1 **BELLS**, T2 **TINE EP**, T3 **SUB BASS**, and T4 **808 KIT**.
3. **T1 melody — ALGORITHM T1 > SEQ > GEN:** **KNOB 1 MODE CONSTL**, **KNOB 2 Y 4**, **KNOB 3 DENS 27%**, and **KNOB 4 SPEED 1/4**. **SEQ > PATTERN:** **KNOB 1 LEN 16**, **KNOB 2 DIV 1/4**, **KNOB 3 SWING 12%**, **KNOB 4 GATE 64**. **ARP > EVOLVE:** **KNOB 2 EVERY OFF**, **KNOB 4 ROLL 23**.
4. **T2 harmony — ALGORITHM T2 > SEQ > GEN:** **KNOB 1 MODE CHORD**, **KNOB 2 PROG DRONE**, **KNOB 3 BARS 2**, **KNOB 4 HIT HOLD**. Keep **OCT-** held on GEN and set **KNOB 2 STRUM 17 ms** and **KNOB 3 DIR ALT** (**Tessera 3.5+**), then release it. **SCL > CHORD:** **KNOB 1 CHRD DIA7**, **KNOB 2 VOIC OPEN**. **ARP > EVOLVE:** **KNOB 2 EVERY OFF**, **KNOB 4 ROLL 52**.
5. **T3 bass — ALGORITHM T3 > SEQ > GEN:** **KNOB 1 MODE EUCLID**, **KNOB 2 STEPS 16**, **KNOB 3 PULSE 3**, **KNOB 4 ROT 4**. **ARP > TWEAK:** **KNOB 4 FOLLOW T2**; hold **OCT-** and set **KNOB 2 HOW BASS**, **KNOB 3 RHYTHM OWN**. **ARP > EVOLVE:** **KNOB 2 EVERY OFF**, **KNOB 4 ROLL 80**.
6. **T4 drums — ALGORITHM T4 > SEQ > GEN:** **KNOB 1 MODE ATLAS**, **KNOB 2 X 186**, **KNOB 3 Y 70**, **KNOB 4 DENS 68%**. **ARP > TWEAK:** **KNOB 3 HUMAN 10%**. **ARP > EVOLVE:** **KNOB 2 EVERY OFF**, **KNOB 4 ROLL 108**.
7. **Space and motion — ALGORITHM T1 > FX > FX 2:** **KNOB 1 TYPE ECHO**, **KNOB 2 MIX 19**, **KNOB 3 TIME 53**, **KNOB 4 REPEAT 29**. **ALGORITHM T2 > LFO > ORGANIC:** **KNOB 1 SPEED 50**. **LFO > MODS:** select unused **M1** with **KNOB 2**; set **KNOB 1 SOURCE T2 TIDE 1**, **KNOB 3 DESTINATION T2 CUTOFF**, **KNOB 4 AMOUNT +18%**.
8. **Arrangement — GLO > CHAIN:** **KNOB 1 FORM AABA**, **KNOB 2 PHRASE 8 bars**, **KNOB 3 WANDER 0%**. **GLO > ENTRIES:** **KNOB 1 ENTRIES 55%**, **KNOB 2 DWELL 2 phrases**, **KNOB 3 STYLE FADE**, **KNOB 4 FADE 2 bars**. **Ending — GLO > PIECE:** **KNOB 1 LENGTH 6 MIN**, **KNOB 2 SHAPE PLATEAU**, **KNOB 3 PEAK 65%**, **KNOB 4 END STOP**. Press **PLAY** once; Tessera performs and stops by itself.

## Final Cartridge

A deterministic, self-playing chiptune patch with seeded melody, harmony, bass, drums, and a complete automatic arrangement.

1. **Start — SAVE > PROJECT:** set **KNOB 1 New song**, press **OCT+**, and confirm with **OCT+** if asked. On **NEW SONG**, set **KNOB 1 ROOT C**, **KNOB 2 SCALE MIN (Natural minor)**, and **KNOB 3 TEMPO 172 BPM**; press **OCT+**. Set role **KNOBS 1–4 KEEP** and press **OCT+** to create. **Sounds — HOME:** set T1 **BELLS** and T4 **808 KIT** with **ALGORITHM + PRESETS**. Leave T2/T3 empty in **MODE STEP**; they will stay silent.
2. **T1 melody — ALGORITHM T1 > SEQ > GEN:** **KNOB 1 MODE BOUNCE**, **KNOB 2 SPEED 21**, **KNOB 3 ANGLE 50°**, and **KNOB 4 BALLS 2**. **SEQ > PATTERN:** **KNOB 1 LEN 16**, **KNOB 2 DIV 1/16**, **KNOB 3 SWING 12%**, **KNOB 4 GATE 64**. **ARP > EVOLVE:** **KNOB 2 EVERY OFF**, **KNOB 4 ROLL 98**. **ARP > FORM:** **KNOB 1 FORM AB**, **KNOB 2 CONTR 18%**. Return to **ARP > EVOLVE** and change **KNOB 2 EVERY** to **8 bars**.
3. **T4 drums — ALGORITHM T4 > SEQ > GEN:** **KNOB 1 MODE ATLAS**, **KNOB 2 X 92**, **KNOB 3 Y 93**, **KNOB 4 DENS 55%**. **ARP > TWEAK:** **KNOB 3 HUMAN 15%**. **ARP > EVOLVE:** **KNOB 2 EVERY OFF**, **KNOB 4 ROLL 55**. **ALGORITHM T1 > FX > FX 2:** **KNOB 1 TYPE ECHO**, **KNOB 2 MIX 12**, **KNOB 3 TIME 58**, **KNOB 4 REPEAT 57**.
4. **Automatic movement — ALGORITHM T1 > ARP > ENERGY:** **KNOB 1 ARC 35%**, **KNOB 2 RESTS 0%**, **KNOB 3 LEVEL 0**. **Ending — GLO > PIECE:** **KNOB 1 LENGTH 10 MIN**, **KNOB 2 SHAPE ARCH**, **KNOB 3 PEAK 65%**, **KNOB 4 END STOP**. Press **PLAY** once; Tessera performs and stops by itself.
