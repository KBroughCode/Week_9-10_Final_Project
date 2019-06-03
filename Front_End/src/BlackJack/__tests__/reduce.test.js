import React from 'react';
import {cleanup} from '@testing-library/react';

afterEach(cleanup)

describe('tests to check if reduce can sort', () => {
  it('should be able to sort an array by a key in the object', () => {
    const array = [
      {
        name: 'person a',
        score: 10
    },
    {
      name: 'person b',
      score: 5
    },
    {
      name: 'person b',
      score: 25
    },
    {
      name: 'person b',
      score: 20
    },
    {
      name: 'person b',
      score: 15
    }
    ]
    const newArray = [...array].sort((a, b) => {
      const scoreA = a.score;
      const scoreB = b.score;

      return scoreB - scoreA;
    });

    expect(newArray).toEqual(
      [
        {
          name: "person b",
          score: 25,
        },
        {
          name: "person b",
          score: 20,
        },
        {
          name: "person b",
          score: 15,
        },
        {
          name: "person a",
          score: 10,
        },
        {
          name: "person b",
          score: 5,
        },
      ]
    )
  })
})
