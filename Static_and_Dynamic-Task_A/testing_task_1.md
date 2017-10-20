### Testing task 1 code:

# Carry out static testing on the code below.  
# Read through the code.  
# Comment any errors you can see without correcting them.

 ```
def func1 val
  if val = 1 // Should use ==
  return true
  else
  return false
  end
end

dif max a b // Should be, def max a b
  if a > b
      return a
  else
  b
  end
end
end // Extra end

def looper // This function returns the range, whether or not that's what's supposed to happen is beyond me.
  for i in 1..10
  puts i
  end
  // Could add 'return i' here so that the test below would pass without changing it to .cover?(10).
end

failures = 0

if looper == 10 // Should be looper.cover?(10) or looper == 1..10
  puts "looper passed"
else
  puts "looper failed"
  failures = failures + 1
// Missing end.

if func1(3) == false
  puts "func1(3) passed"
else
  puts "func1(3) failed"
  failures = failures + 1
end


if max(100,1) == 100
  puts "max(100,1) passed"
else
  puts "func1(3) failed"
  failrues = failures + 1 // Failed to spell failures.
end


if failures // > 0
  puts "Test Failed"
else
  puts "Test Passed"
end

```
