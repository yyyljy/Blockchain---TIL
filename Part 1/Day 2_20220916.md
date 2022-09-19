# DAY 2

#### 박민서 강사님

## 블록

https://en.bitcoin.it/wiki/Difficulty

https://www.blockchain.com/explorer/blocks/btc/754283

https://ko.calcuworld.com/%EC%88%98%ED%95%99/16%EC%A7%84%EB%B2%95-%EA%B3%84%EC%82%B0%EA%B8%B0/

### What is the formula for difficulty?

difficulty = difficulty_1_target / current_target



### How is difficulty stored in blocks?

Each block stores a packed representation (called "Bits") for its actual hexadecimal [target](https://en.bitcoin.it/wiki/Target). The target can be derived from it via a predefined formula. For example, if the packed target in the block is 0x1b0404cb (stored in little-endian order: `cb 04 04 1b`), the hexadecimal target is

```
0x0404cb * 2**(8*(0x1b - 3)) = 0x00000000000404CB000000000000000000000000000000000000000000000000
```



#### Difficulty값을 이용한 Target값 계산

difficulty = 0x1d00ffff

- 0x1d
- 0x00ffff
- 두 개로 자릿수를 분리

```
0x00ffff * 2^(8*(0x1d - 3))
> 65535 * 2^(8*(29 - 3))
> 2.6959535291011309493156476344724e+67
> 0x00000000FFFF0000000000000000000000000000000000000000000000000000
```



#### Target값 계산 실습

- [링크된](https://www.blockchain.com/explorer/blocks/btc/754283) 754283 블록의 Difficulty로 Target 값을 구하고 Hash값과 비교해보기

```
# Hash
0x 0000 0000 0000 0000 0007 fcca 7a8c 980f 8493 8ca7 cc05 1f7b 2831 2567 f96a 2aab

# Difficulty
current(754283블록)
> 32045359565303.15
> 32045359565303
> 0x1d25244609f7
previous
> 30977051760460
> 0x1c2c682a974c
```

- difficulty = difficulty_1_target / current_target
  - current_target = difficulty_1_target / difficulty

```
current_target = 
> 8.4129295650661544493668394012867e+53
> 0x8c8940000000b00000000000000000000000000000000
> 0x8 c894 0000 000b 0000 0000 0000 0000 0000 0000 0000 0000
```

- Hash 값과 current_target 비교

```
# Hash
0x 0000 0000 0000 0000 0007 fcca 7a8c 980f 8493 8ca7 cc05 1f7b 2831 2567 f96a 2aab
# current_target
0x 0000 0000 0000 0000 0008 c894 0000 000b 0000 0000 0000 0000 0000 0000 0000 0000

current_target > Hash 확인
```

```
# 754284 블록
# Hash
0x 0000 0000 0000 0000 0002 4e51 467e 7daa 8b2d e7a1 5836 52d4 ec30 7486 71fa b6aa
```

-  D * 2 ^256 / (0xffff * 2^208)

- hashrate : 네트워크 일처리 속도 

- time = difficulty * 2 ^ 32 / hashrate



- 참고서적 : [마스터링 비트코인](https://github.com/bitcoinbook/bitcoinbook)

- 블록의 정의

  - 블록은 데이터들을 담은 하나의 자료구조
  - 헤더와 바디로 구분됨

- 블록 해시

  - 특정 블록을 구별할 수 있는 요소 중 하나

  

- 이진트리 : 자식을 두명 가지고 있는 부모로 이루어진 트리

- 머클 트리 : 이진트리 구조로 거래내역을 두개씩 묶어 해싱하여 쌓아올린 구조

- 머클해시 : 거래내역을 바탕으로 머클트리를 쌓아 만든 루트값 (최상단 부모 해시 값)