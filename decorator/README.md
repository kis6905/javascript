# Decorator

### Decorator는 최종적으로 채택된 스펙이 아니기 때문에 babel과 함께 사용해야 한다.
### [babel](https://babeljs.io/docs/en/babel-plugin-proposal-decorators) 설정은 링크에서 확인할 수 있다.

***

- 해당 git repository를 받아서 실행할 경우 생략
```
# install packages
$ npm i -D @babel/cli @babel/node @babel/core @babel/plugin-proposal-decorators

# create .babelrc
$ echo "{ \"plugins\": [ [\"@babel/plugin-proposal-decorators\", { \"legacy\": true }] ] }" > .babelrc
```

***
- 실행

```
# run babel-node
$ ./node_modules/.bin/babel-node ./test.js
```

***

### 출처
[https://wonism.github.io/what-is-decorator/]