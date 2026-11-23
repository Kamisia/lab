# Resistor Color

## Instructions

If you want to build something using a Raspberry Pi, you will probably use resistors.
For this exercise, you need to know two things about them:

- Each resistor has a resistance value.
- Resistors are small, so small in fact that if you printed the resistance value on them, it would be hard to read.

To get around this problem, manufacturers print color-coded bands onto the resistors to denote their resistance values.
Each band has a position and a numeric value.

The first 2 bands of a resistor have a simple encoding scheme: each color maps to a single number.

In this exercise you are going to create a helpful program so that you do not have to remember the values of the bands.

These colors are encoded as follows:

| Color | Value |
| --- | ---: |
| black | 0 |
| brown | 1 |
| red | 2 |
| orange | 3 |
| yellow | 4 |
| green | 5 |
| blue | 6 |
| violet | 7 |
| grey | 8 |
| white | 9 |

The goal of this exercise is to create a way:

- To look up the numerical value associated with a particular color band.
- To list the different band colors.

Mnemonics map the colors to the numbers, that, when stored as an array, happen to map to their index in the array:

```text
Better Be Right Or Your Great Big Values Go Wrong.
```

More information on the color encoding of resistors can be found in the [Electronic color code Wikipedia article](https://en.wikipedia.org/wiki/Electronic_color_code).
