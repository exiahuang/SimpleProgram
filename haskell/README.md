# Hello Haskell
Haskell Introduce


## install

```
$ sduo apt-get install haskell-platform

```

## ghci base usage

```sh
# Run Haskell
$ ghci
Prelude> :set prompt "λ > "

# check type
λ > :t 5 * 6
5 * 6 :: Num a => a

# help
:info take
:info map

```

## usefull function in heskell

```
 λ > :t ($)
($) :: (a -> b) -> a -> b

 λ > :t (map)
(map) :: (a -> b) -> [a] -> [b]

 λ > :t (!!)
(!!) :: [a] -> Int -> a

 λ > :t (.)
(.) :: (b -> c) -> (a -> b) -> a -> c

 λ >

```

# Haskell Problem

## problem1: sum

- [Solve Me First](https://www.hackerrank.com/challenges/solve-me-first/problem)
- [Simple Array Sum](https://www.hackerrank.com/challenges/simple-array-sum/problem)
- [A Very Big Sum](https://www.hackerrank.com/challenges/a-very-big-sum/problem)


```hs
main = interact $ show . sum . map read . words
main = interact $ show . sum . map read . tail . words
```

## problem2: mod

- [Grading Students](https://www.hackerrank.com/challenges/grading/problem)

```
round5 :: Int -> Int
round5 x
 | x >= 38 && ( m5 - x ) < 3 = m5
 | otherwise  = x
 where m5 = x + ( 5 - x `mod` 5)

solve :: [Int] -> [Int]
solve xs = map round5 xs

main = interact $ unlines . map show . solve . map read . tail . words
```

## problem3: predicate filter map

- [Apple and Orange](https://www.hackerrank.com/challenges/apple-and-orange/problem)
- [Pattern Matching](https://www.haskell.org/tutorial/patterns.html)
- [Data.Function.Predicate](http://hackage.haskell.org/package/predicates-0.1/docs/Data-Function-Predicate.html)

In mathematical logic, a predicate is commonly understood to be a Boolean-valued function P: X→ {true, false}, called a predicate on X.

```

solve :: [Int] -> [Int]
solve (s:t:a:b:m:_:rest) = [as, os]
    where as = length $ filter (\x -> s <= x && x <= t) $ map (\x -> x + a) $ take m rest
          os = length $ filter (\x -> s <= x && x <= t) $ map (\x -> x + b) $ drop m rest

main = interact $ unlines . map show . solve . map read . words
```


## problem4: cut string

- [Get the Middle Character](https://www.codewars.com/kata/56747fd5cb988479af000028)

```
getMiddle :: String -> String
getMiddle s
    | odd n = [s !! halfN]
    | otherwise = [s !! (halfN -1), s !! halfN]
    where n = length s
          halfN = n `div` 2
    

```

To Be continue...
