#Roulette user journey:

Start: User has clicked on Roulette. Roulette layout is displayed. DISPLAY MESSAGE: 'Place bets'.
Steps:
  - User selects coin value from bottom bar.
      SYSTEM: updates cursor to coin
  - User selects squares
      SYSTEM: places coins on table
  - User clicks 'ready'. DISPLAY MESSAGE: 'Spinning...'
      SYSTEM: [wheel spins. Wheel updates state.winningNumber]
      SYSTEM: renders WinnerDisplay.
  - User selects 'new game' / 'exit'






##Roulette test plan:

#Test 1:
Start: User has clicked on Roulette. Roulette layout is displayed.
Steps:
  - User selects coin value 5 from bottom bar.
  - User clicks square red 14.
Expected outcome:
  - A silver coin of value 5 will appear on square red 14. The cursor will be a silver coin.

PRODUCE TABLE WITH REMAINING TESTS
