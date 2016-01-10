# iso8601
[![Circle CI](https://circleci.com/gh/coinpit/iso8601.svg?style=shield)](https://circleci.com/gh/coinpit/iso8601)
## Convert time to UTC and print

### Get Date in ISO 9661 format
```javascript
console.log(utc.iso(new Date()))
```
#### Returns
```
2016-01-09T18:16:50.803Z
```
### Get hours:minutes
```javascript
console.log(utc.hhmm(new Date()))
```
#### Returns
```
18:16
```
### Get month:date
```javascript
console.log(utc.mmdd(new Date()))
```
#### Returns
```
01-09
```
### Get short ISO 9661 string
```javascript
console.log(utc.longdate(new Date()))
```
#### Returns
```
2016-01-09T18:16
```
