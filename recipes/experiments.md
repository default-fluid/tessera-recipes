# Experimental recipes

Eight systems for when a surprising process matters more than a familiar genre.

## Mosaic Telephone

A deterministic, self-playing experiments patch with seeded melody, harmony, bass, drums, and a complete automatic arrangement.

1. **Start — SAVE > PROJECT:** set **KNOB 1 New song**, press **OCT+**, and confirm with **OCT+** if asked. On **NEW SONG**, set **KNOB 1 ROOT E**, **KNOB 2 SCALE KUMOI (Kumoi)**, and **KNOB 3 TEMPO 80 BPM**; press **OCT+**. Set role **KNOBS 1–4 KEEP** and press **OCT+** to create. **Sounds — HOME:** turn **ALGORITHM** to each track and set **PRESETS** to T1 **KUGO HARP**, T2 **STRING MACH**, T3 **FLUTE**, and T4 **808 KIT**.
2. **T1 melody — ALGORITHM T1 > SEQ > GEN:** **KNOB 1 MODE MARKOV**, **KNOB 2 LEAP 34%**, **KNOB 3 DENS 36%**, and **KNOB 4 SPAN 1 octave**. **SEQ > PATTERN:** **KNOB 1 LEN 16**, **KNOB 2 DIV 1/4**, **KNOB 3 SWING 12%**, **KNOB 4 GATE 64**. **ARP > EVOLVE:** **KNOB 2 EVERY OFF**, **KNOB 4 ROLL 47**.
3. **T2 harmony — ALGORITHM T2 > SEQ > GEN:** **KNOB 1 MODE CHORD**, **KNOB 2 PROG TWO**, **KNOB 3 BARS 2**, **KNOB 4 HIT HOLD**. **SCL > CHORD:** **KNOB 1 CHRD DIA7**, **KNOB 2 VOIC OPEN**. **ARP > EVOLVE:** **KNOB 2 EVERY OFF**, **KNOB 4 ROLL 76**.
4. **T3 bass — ALGORITHM T3 > SEQ > GEN:** **KNOB 1 MODE EUCLID**, **KNOB 2 STEPS 16**, **KNOB 3 PULSE 5**, **KNOB 4 ROT 4**. **ARP > TWEAK:** **KNOB 4 FOLLOW T2**; hold **OCT-** and set **KNOB 2 HOW BASS**, **KNOB 3 RHYTHM OWN**. **ARP > EVOLVE:** **KNOB 2 EVERY OFF**, **KNOB 4 ROLL 104**.
5. **T4 drums — ALGORITHM T4 > SEQ > GEN:** **KNOB 1 MODE ATLAS**, **KNOB 2 X 75**, **KNOB 3 Y 76**, **KNOB 4 DENS 58%**. **ARP > TWEAK:** **KNOB 3 HUMAN 14%**. **ARP > EVOLVE:** **KNOB 2 EVERY OFF**, **KNOB 4 ROLL 4**. **Space and motion — ALGORITHM T1 > FX > FX 2:** **KNOB 1 TYPE ECHO**, **KNOB 2 MIX 28**, **KNOB 3 TIME 53**, **KNOB 4 REPEAT 29**. **ALGORITHM T2 > LFO > ORGANIC:** **KNOB 1 SPEED 50**. **LFO > MODS:** select unused **M1** with **KNOB 2**; set **KNOB 1 SOURCE T2 TIDE 1**, **KNOB 3 DESTINATION T2 CUTOFF**, **KNOB 4 AMOUNT +15%**.
6. **Arrangement — GLO > CHAIN:** **KNOB 1 FORM AABA**, **KNOB 2 PHRASE 8 bars**, **KNOB 3 WANDER 0%**. **GLO > ENTRIES:** **KNOB 1 ENTRIES 55%**, **KNOB 2 DWELL 2 phrases**, **KNOB 3 STYLE FADE**, **KNOB 4 FADE 2 bars**. **Ending — GLO > PIECE:** **KNOB 1 LENGTH 6 MIN**, **KNOB 2 SHAPE PLATEAU**, **KNOB 3 PEAK 65%**, **KNOB 4 END STOP**. Press **PLAY** once; Tessera performs and stops by itself.

## Gravity Well

A deterministic, self-playing experiments patch with seeded melody, harmony, bass, drums, and a complete automatic arrangement.

1. **Start — SAVE > PROJECT:** set **KNOB 1 New song**, press **OCT+**, and confirm with **OCT+** if asked. On **NEW SONG**, set **KNOB 1 ROOT E**, **KNOB 2 SCALE KUMOI (Kumoi)**, and **KNOB 3 TEMPO 80 BPM**; press **OCT+**. Set role **KNOBS 1–4 KEEP** and press **OCT+** to create. **Sounds — HOME:** set T1 **KUGO HARP** and T4 **808 KIT** with **ALGORITHM + PRESETS**. Leave T2/T3 empty in **MODE STEP**; they will stay silent.
2. **T1 melody — ALGORITHM T1 > SEQ > GEN:** **KNOB 1 MODE CONSTL**, **KNOB 2 Y 7**, **KNOB 3 DENS 49%**, and **KNOB 4 SPEED 1/8**. **SEQ > PATTERN:** **KNOB 1 LEN 16**, **KNOB 2 DIV 1/8**, **KNOB 3 SWING 12%**, **KNOB 4 GATE 64**. **ARP > EVOLVE:** **KNOB 2 EVERY OFF**, **KNOB 4 ROLL 97**. **ARP > FORM:** **KNOB 1 FORM AB**, **KNOB 2 CONTR 18%**. Return to **ARP > EVOLVE** and change **KNOB 2 EVERY** to **8 bars**.
3. **T4 drums — ALGORITHM T4 > SEQ > GEN:** **KNOB 1 MODE ATLAS**, **KNOB 2 X 72**, **KNOB 3 Y 73**, **KNOB 4 DENS 54%**. **ARP > TWEAK:** **KNOB 3 HUMAN 14%**. **ARP > EVOLVE:** **KNOB 2 EVERY OFF**, **KNOB 4 ROLL 54**. **ALGORITHM T1 > FX > FX 2:** **KNOB 1 TYPE ECHO**, **KNOB 2 MIX 25**, **KNOB 3 TIME 68**, **KNOB 4 REPEAT 34**.
4. **Automatic movement — ALGORITHM T1 > ARP > ENERGY:** **KNOB 1 ARC 35%**, **KNOB 2 RESTS 0%**, **KNOB 3 LEVEL 0**. **Ending — GLO > PIECE:** **KNOB 1 LENGTH 6 MIN**, **KNOB 2 SHAPE RISE**, **KNOB 3 PEAK 65%**, **KNOB 4 END STOP**. Press **PLAY** once; Tessera performs and stops by itself.

## Conditional Orchestra

A deterministic, self-playing experiments patch with seeded melody, harmony, bass, drums, and a complete automatic arrangement.

1. **Start — SAVE > PROJECT:** set **KNOB 1 New song**, press **OCT+**, and confirm with **OCT+** if asked. On **NEW SONG**, set **KNOB 1 ROOT E**, **KNOB 2 SCALE KUMOI (Kumoi)**, and **KNOB 3 TEMPO 80 BPM**; press **OCT+**. Set role **KNOBS 1–4 KEEP** and press **OCT+** to create. **Sounds — HOME:** set T1 **KUGO HARP** and T4 **808 KIT** with **ALGORITHM + PRESETS**. Leave T2/T3 empty in **MODE STEP**; they will stay silent.
2. **T1 melody — ALGORITHM T1 > SEQ > GEN:** **KNOB 1 MODE TURING**, **KNOB 2 LENGTH 9**, **KNOB 3 PROB 1%**, and **KNOB 4 SPAN 2 octaves**. **SEQ > PATTERN:** **KNOB 1 LEN 16**, **KNOB 2 DIV 1/8**, **KNOB 3 SWING 12%**, **KNOB 4 GATE 64**. **ARP > EVOLVE:** **KNOB 2 EVERY OFF**, **KNOB 4 ROLL 20**. **ARP > FORM:** **KNOB 1 FORM AB**, **KNOB 2 CONTR 18%**. Return to **ARP > EVOLVE** and change **KNOB 2 EVERY** to **8 bars**.
3. **T4 drums — ALGORITHM T4 > SEQ > GEN:** **KNOB 1 MODE ATLAS**, **KNOB 2 X 172**, **KNOB 3 Y 173**, **KNOB 4 DENS 43%**. **ARP > TWEAK:** **KNOB 3 HUMAN 9%**. **ARP > EVOLVE:** **KNOB 2 EVERY OFF**, **KNOB 4 ROLL 105**. **ALGORITHM T1 > FX > FX 2:** **KNOB 1 TYPE ECHO**, **KNOB 2 MIX 28**, **KNOB 3 TIME 44**, **KNOB 4 REPEAT 50**.
4. **Automatic movement — ALGORITHM T1 > ARP > ENERGY:** **KNOB 1 ARC 35%**, **KNOB 2 RESTS 0%**, **KNOB 3 LEVEL 0**. **Ending — GLO > PIECE:** **KNOB 1 LENGTH 8 MIN**, **KNOB 2 SHAPE WAVES**, **KNOB 3 COUNT 3**, **KNOB 4 END STOP**. Press **PLAY** once; Tessera performs and stops by itself.

## Pendulum Canon

A deterministic, self-playing experiments patch with seeded melody, harmony, bass, drums, and a complete automatic arrangement.

1. **Start — SAVE > PROJECT:** set **KNOB 1 New song**, press **OCT+**, and confirm with **OCT+** if asked. On **NEW SONG**, set **KNOB 1 ROOT E**, **KNOB 2 SCALE KUMOI (Kumoi)**, and **KNOB 3 TEMPO 80 BPM**; press **OCT+**. Set role **KNOBS 1–4 KEEP** and press **OCT+** to create. **Sounds — HOME:** set T1 **KUGO HARP** and T4 **808 KIT** with **ALGORITHM + PRESETS**. Leave T2/T3 empty in **MODE STEP**; they will stay silent.
2. **T1 melody — ALGORITHM T1 > SEQ > GEN:** **KNOB 1 MODE TURING**, **KNOB 2 LENGTH 7**, **KNOB 3 PROB 8%**, and **KNOB 4 SPAN 2 octaves**. **SEQ > PATTERN:** **KNOB 1 LEN 16**, **KNOB 2 DIV 1/16**, **KNOB 3 SWING 12%**, **KNOB 4 GATE 64**. **ARP > EVOLVE:** **KNOB 2 EVERY OFF**, **KNOB 4 ROLL 42**. **ARP > FORM:** **KNOB 1 FORM AB**, **KNOB 2 CONTR 18%**. Return to **ARP > EVOLVE** and change **KNOB 2 EVERY** to **8 bars**.
3. **T4 drums — ALGORITHM T4 > SEQ > GEN:** **KNOB 1 MODE ATLAS**, **KNOB 2 X 178**, **KNOB 3 Y 179**, **KNOB 4 DENS 59%**. **ARP > TWEAK:** **KNOB 3 HUMAN 25%**. **ARP > EVOLVE:** **KNOB 2 EVERY OFF**, **KNOB 4 ROLL 127**. **ALGORITHM T1 > FX > FX 2:** **KNOB 1 TYPE ECHO**, **KNOB 2 MIX 15**, **KNOB 3 TIME 66**, **KNOB 4 REPEAT 53**.
4. **Automatic movement — ALGORITHM T1 > ARP > ENERGY:** **KNOB 1 ARC 35%**, **KNOB 2 RESTS 0%**, **KNOB 3 LEVEL 0**. **Ending — GLO > PIECE:** **KNOB 1 LENGTH 8 MIN**, **KNOB 2 SHAPE ARCH**, **KNOB 3 PEAK 65%**, **KNOB 4 END STOP**. Press **PLAY** once; Tessera performs and stops by itself.

## Clockwork Garden

A deterministic, self-playing experiments patch with seeded melody, harmony, bass, drums, and a complete automatic arrangement.

1. **Start — SAVE > PROJECT:** set **KNOB 1 New song**, press **OCT+**, and confirm with **OCT+** if asked. On **NEW SONG**, set **KNOB 1 ROOT E**, **KNOB 2 SCALE KUMOI (Kumoi)**, and **KNOB 3 TEMPO 80 BPM**; press **OCT+**. Set role **KNOBS 1–4 KEEP** and press **OCT+** to create.
2. **Sounds — HOME:** turn **ALGORITHM** to each track and set **PRESETS** to T1 **KUGO HARP**, T2 **STRING MACH**, T3 **FLUTE**, and T4 **808 KIT**.
3. **T1 melody — ALGORITHM T1 > SEQ > GEN:** **KNOB 1 MODE SERIES**, **KNOB 2 START 22**, **KNOB 3 INTV 3**, and **KNOB 4 LOOP 8**. **SEQ > PATTERN:** **KNOB 1 LEN 16**, **KNOB 2 DIV 1/4**, **KNOB 3 SWING 12%**, **KNOB 4 GATE 64**. **ARP > EVOLVE:** **KNOB 2 EVERY OFF**, **KNOB 4 ROLL 87**.
4. **T2 harmony — ALGORITHM T2 > SEQ > GEN:** **KNOB 1 MODE CHORD**, **KNOB 2 PROG POP**, **KNOB 3 BARS 2**, **KNOB 4 HIT HOLD**. Keep **OCT-** held on GEN and set **KNOB 2 STRUM 25 ms** and **KNOB 3 DIR DOWN** (**Tessera 3.5+**), then release it. **SCL > CHORD:** **KNOB 1 CHRD DIA7**, **KNOB 2 VOIC OPEN**. **ARP > EVOLVE:** **KNOB 2 EVERY OFF**, **KNOB 4 ROLL 116**.
5. **T3 bass — ALGORITHM T3 > SEQ > GEN:** **KNOB 1 MODE EUCLID**, **KNOB 2 STEPS 16**, **KNOB 3 PULSE 4**, **KNOB 4 ROT 4**. **ARP > TWEAK:** **KNOB 4 FOLLOW T2**; hold **OCT-** and set **KNOB 2 HOW BASS**, **KNOB 3 RHYTHM OWN**. **ARP > EVOLVE:** **KNOB 2 EVERY OFF**, **KNOB 4 ROLL 16**. **T4 drums — ALGORITHM T4 > SEQ > GEN:** **KNOB 1 MODE ATLAS**, **KNOB 2 X 105**, **KNOB 3 Y 106**, **KNOB 4 DENS 56%**. **ARP > TWEAK:** **KNOB 3 HUMAN 18%**. **ARP > EVOLVE:** **KNOB 2 EVERY OFF**, **KNOB 4 ROLL 44**.
6. **Space and motion — ALGORITHM T1 > FX > FX 2:** **KNOB 1 TYPE ECHO**, **KNOB 2 MIX 20**, **KNOB 3 TIME 70**, **KNOB 4 REPEAT 29**. **ALGORITHM T2 > LFO > ORGANIC:** **KNOB 1 SPEED 50**. **LFO > MODS:** select unused **M1** with **KNOB 2**; set **KNOB 1 SOURCE T2 TIDE 1**, **KNOB 3 DESTINATION T2 CUTOFF**, **KNOB 4 AMOUNT +23%**.
7. **Arrangement — GLO > CHAIN:** **KNOB 1 FORM AABA**, **KNOB 2 PHRASE 8 bars**, **KNOB 3 WANDER 0%**. **GLO > ENTRIES:** **KNOB 1 ENTRIES 55%**, **KNOB 2 DWELL 2 phrases**, **KNOB 3 STYLE FADE**, **KNOB 4 FADE 2 bars**. **Ending — GLO > PIECE:** **KNOB 1 LENGTH 6 MIN**, **KNOB 2 SHAPE PLATEAU**, **KNOB 3 PEAK 65%**, **KNOB 4 END STOP**. Press **PLAY** once; Tessera performs and stops by itself.

## Logic Rain

A deterministic, self-playing experiments patch with seeded melody, harmony, bass, drums, and a complete automatic arrangement.

1. **Start — SAVE > PROJECT:** set **KNOB 1 New song**, press **OCT+**, and confirm with **OCT+** if asked. On **NEW SONG**, set **KNOB 1 ROOT E**, **KNOB 2 SCALE KUMOI (Kumoi)**, and **KNOB 3 TEMPO 80 BPM**; press **OCT+**. Set role **KNOBS 1–4 KEEP** and press **OCT+** to create. **Sounds — HOME:** turn **ALGORITHM** to each track and set **PRESETS** to T1 **KUGO HARP**, T2 **STRING MACH**, T3 **FLUTE**, and T4 **808 KIT**.
2. **T1 melody — ALGORITHM T1 > SEQ > GEN:** **KNOB 1 MODE TURING**, **KNOB 2 LENGTH 6**, **KNOB 3 PROB 5%**, and **KNOB 4 SPAN 1 octave**. **SEQ > PATTERN:** **KNOB 1 LEN 16**, **KNOB 2 DIV 1/4**, **KNOB 3 SWING 12%**, **KNOB 4 GATE 64**. **ARP > EVOLVE:** **KNOB 2 EVERY OFF**, **KNOB 4 ROLL 23**.
3. **T2 harmony — ALGORITHM T2 > SEQ > GEN:** **KNOB 1 MODE CHORD**, **KNOB 2 PROG CIRCLE**, **KNOB 3 BARS 2**, **KNOB 4 HIT HOLD**. **SCL > CHORD:** **KNOB 1 CHRD DIA7**, **KNOB 2 VOIC OPEN**. **ARP > EVOLVE:** **KNOB 2 EVERY OFF**, **KNOB 4 ROLL 52**.
4. **T3 bass — ALGORITHM T3 > SEQ > GEN:** **KNOB 1 MODE EUCLID**, **KNOB 2 STEPS 16**, **KNOB 3 PULSE 5**, **KNOB 4 ROT 4**. **ARP > TWEAK:** **KNOB 4 FOLLOW T2**; hold **OCT-** and set **KNOB 2 HOW BASS**, **KNOB 3 RHYTHM OWN**. **ARP > EVOLVE:** **KNOB 2 EVERY OFF**, **KNOB 4 ROLL 80**.
5. **T4 drums — ALGORITHM T4 > SEQ > GEN:** **KNOB 1 MODE ATLAS**, **KNOB 2 X 110**, **KNOB 3 Y 111**, **KNOB 4 DENS 68%**. **ARP > TWEAK:** **KNOB 3 HUMAN 22%**. **ARP > EVOLVE:** **KNOB 2 EVERY OFF**, **KNOB 4 ROLL 108**. **Space and motion — ALGORITHM T1 > FX > FX 2:** **KNOB 1 TYPE ECHO**, **KNOB 2 MIX 14**, **KNOB 3 TIME 56**, **KNOB 4 REPEAT 47**. **ALGORITHM T2 > LFO > ORGANIC:** **KNOB 1 SPEED 50**. **LFO > MODS:** select unused **M1** with **KNOB 2**; set **KNOB 1 SOURCE T2 TIDE 1**, **KNOB 3 DESTINATION T2 CUTOFF**, **KNOB 4 AMOUNT +30%**.
6. **Arrangement — GLO > CHAIN:** **KNOB 1 FORM AABA**, **KNOB 2 PHRASE 8 bars**, **KNOB 3 WANDER 0%**. **GLO > ENTRIES:** **KNOB 1 ENTRIES 55%**, **KNOB 2 DWELL 2 phrases**, **KNOB 3 STYLE FADE**, **KNOB 4 FADE 2 bars**. **Ending — GLO > PIECE:** **KNOB 1 LENGTH 10 MIN**, **KNOB 2 SHAPE PLATEAU**, **KNOB 3 PEAK 65%**, **KNOB 4 END STOP**. Press **PLAY** once; Tessera performs and stops by itself.

## Seed Museum

A deterministic, self-playing experiments patch with seeded melody, harmony, bass, drums, and a complete automatic arrangement.

1. **Start — SAVE > PROJECT:** set **KNOB 1 New song**, press **OCT+**, and confirm with **OCT+** if asked. On **NEW SONG**, set **KNOB 1 ROOT E**, **KNOB 2 SCALE KUMOI (Kumoi)**, and **KNOB 3 TEMPO 80 BPM**; press **OCT+**. Set role **KNOBS 1–4 KEEP** and press **OCT+** to create. **Sounds — HOME:** set T1 **KUGO HARP** and T4 **808 KIT** with **ALGORITHM + PRESETS**. Leave T2/T3 empty in **MODE STEP**; they will stay silent.
2. **T1 melody — ALGORITHM T1 > SEQ > GEN:** **KNOB 1 MODE BOUNCE**, **KNOB 2 SPEED 24**, **KNOB 3 ANGLE 38°**, and **KNOB 4 BALLS 2**. **SEQ > PATTERN:** **KNOB 1 LEN 16**, **KNOB 2 DIV 1/16**, **KNOB 3 SWING 12%**, **KNOB 4 GATE 64**. **ARP > EVOLVE:** **KNOB 2 EVERY OFF**, **KNOB 4 ROLL 98**. **ARP > FORM:** **KNOB 1 FORM AB**, **KNOB 2 CONTR 18%**. Return to **ARP > EVOLVE** and change **KNOB 2 EVERY** to **8 bars**.
3. **T4 drums — ALGORITHM T4 > SEQ > GEN:** **KNOB 1 MODE ATLAS**, **KNOB 2 X 166**, **KNOB 3 Y 167**, **KNOB 4 DENS 67%**. **ARP > TWEAK:** **KNOB 3 HUMAN 21%**. **ARP > EVOLVE:** **KNOB 2 EVERY OFF**, **KNOB 4 ROLL 55**. **ALGORITHM T1 > FX > FX 2:** **KNOB 1 TYPE ECHO**, **KNOB 2 MIX 25**, **KNOB 3 TIME 43**, **KNOB 4 REPEAT 35**.
4. **Automatic movement — ALGORITHM T1 > ARP > ENERGY:** **KNOB 1 ARC 35%**, **KNOB 2 RESTS 0%**, **KNOB 3 LEVEL 0**. **Ending — GLO > PIECE:** **KNOB 1 LENGTH 10 MIN**, **KNOB 2 SHAPE ARCH**, **KNOB 3 PEAK 65%**, **KNOB 4 END STOP**. Press **PLAY** once; Tessera performs and stops by itself.

## Machine That Dreams of Silence

A deterministic, self-playing experiments patch with seeded melody, harmony, bass, drums, and a complete automatic arrangement.

1. **Start — SAVE > PROJECT:** set **KNOB 1 New song**, press **OCT+**, and confirm with **OCT+** if asked. On **NEW SONG**, set **KNOB 1 ROOT E**, **KNOB 2 SCALE KUMOI (Kumoi)**, and **KNOB 3 TEMPO 80 BPM**; press **OCT+**. Set role **KNOBS 1–4 KEEP** and press **OCT+** to create.
2. **Sounds — HOME:** turn **ALGORITHM** to each track and set **PRESETS** to T1 **KUGO HARP**, T2 **STRING MACH**, T3 **FLUTE**, and T4 **808 KIT**.
3. **T1 melody — ALGORITHM T1 > SEQ > GEN:** **KNOB 1 MODE BOUNCE**, **KNOB 2 SPEED 22**, **KNOB 3 ANGLE 57°**, and **KNOB 4 BALLS 1**. **SEQ > PATTERN:** **KNOB 1 LEN 16**, **KNOB 2 DIV 1/8**, **KNOB 3 SWING 12%**, **KNOB 4 GATE 64**. **ARP > EVOLVE:** **KNOB 2 EVERY OFF**, **KNOB 4 ROLL 41**.
4. **T2 harmony — ALGORITHM T2 > SEQ > GEN:** **KNOB 1 MODE CHORD**, **KNOB 2 PROG POP**, **KNOB 3 BARS 2**, **KNOB 4 HIT HOLD**. Keep **OCT-** held on GEN and set **KNOB 2 STRUM 47 ms** and **KNOB 3 DIR ALT** (**Tessera 3.5+**), then release it. **SCL > CHORD:** **KNOB 1 CHRD DIA7**, **KNOB 2 VOIC OPEN**. **ARP > EVOLVE:** **KNOB 2 EVERY OFF**, **KNOB 4 ROLL 70**.
5. **T3 bass — ALGORITHM T3 > SEQ > GEN:** **KNOB 1 MODE EUCLID**, **KNOB 2 STEPS 16**, **KNOB 3 PULSE 6**, **KNOB 4 ROT 6**. **ARP > TWEAK:** **KNOB 4 FOLLOW T2**; hold **OCT-** and set **KNOB 2 HOW BASS**, **KNOB 3 RHYTHM OWN**. **ARP > EVOLVE:** **KNOB 2 EVERY OFF**, **KNOB 4 ROLL 98**. **T4 drums — ALGORITHM T4 > SEQ > GEN:** **KNOB 1 MODE ATLAS**, **KNOB 2 X 167**, **KNOB 3 Y 168**, **KNOB 4 DENS 70%**. **ARP > TWEAK:** **KNOB 3 HUMAN 22%**. **ARP > EVOLVE:** **KNOB 2 EVERY OFF**, **KNOB 4 ROLL 126**.
6. **Space and motion — ALGORITHM T1 > FX > FX 2:** **KNOB 1 TYPE ECHO**, **KNOB 2 MIX 18**, **KNOB 3 TIME 48**, **KNOB 4 REPEAT 27**. **ALGORITHM T2 > LFO > ORGANIC:** **KNOB 1 SPEED 50**. **LFO > MODS:** select unused **M1** with **KNOB 2**; set **KNOB 1 SOURCE T2 TIDE 1**, **KNOB 3 DESTINATION T2 CUTOFF**, **KNOB 4 AMOUNT +28%**.
7. **Arrangement — GLO > CHAIN:** **KNOB 1 FORM AB**, **KNOB 2 PHRASE 8 bars**, **KNOB 3 WANDER 0%**. **GLO > ENTRIES:** **KNOB 1 ENTRIES 55%**, **KNOB 2 DWELL 2 phrases**, **KNOB 3 STYLE FADE**, **KNOB 4 FADE 2 bars**. **Ending — GLO > PIECE:** **KNOB 1 LENGTH 8 MIN**, **KNOB 2 SHAPE RISE**, **KNOB 3 PEAK 65%**, **KNOB 4 END STOP**. Press **PLAY** once; Tessera performs and stops by itself.
