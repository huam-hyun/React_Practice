const fn = require('./fn');

// test('1은 1이다.', () => {
//   expect(1).toBe(1);
// });

// test('2 + 3 = 5', () => {
//   expect(fn.add(2, 3)).toBe(5);
// });

// test('3 + 3 != 5', () => {
//   expect(fn.add(2, 3)).toEqual(5);
// });
// // gender가 없어도 성공하게 된다.
// test('이름과 나이를 전달받아 객체를 반환해줘', () => {
//   expect(fn.makeUser("Mike", 30)).toEqual({
//     name: "Mike",
//     age: 30,
//   })
// });
// // gender가 없어서 실패하게 된다.
// test('이름과 나이를 전달받아 객체를 반환해줘', () => {
//   expect(fn.makeUser("Mike", 30)).toStrictEqual({
//     name: "Mike",
//     age: 30,
//   })
// });

// test('null은 null입니다.', () => {
//   expect(null).toBeNull();
// });

// test('0은 false 입니다.', () => {
//   expect(fn.add('hello', 'world')).toBeFalsy();
// });

// test('비어있지 않은 문자열은 true 입니다.', () => {
//   expect(fn.add('hello', 'world')).toBeTruthy();
// });

// test("ID는 10자 이하여야 합니다.", () => {
//   const id = "THE_BLACK";
//   expect(id.length).toBeLessThanOrEqual(10);
// });
// // JS는 0.1 + 0.2 가 0.3이 아니기 때문에 toBeCloseTo를 사용해야 함
// test("0.1 더하기 0.2는 0.3 입니다.", () => {
//   expect(fn.add(0.1, 0.2)).toBeCloseTo(0.3);
// });

// test('Hello wolrd에 h 라는 글자가 있나?', () => {
//   expect("Hello World").toMatch(/h/i);
// });

// test("유저 리스트에 Mike가 있나?", () => {
//   const user = 'Mike';
//   const userList = ['Tom', 'Mike', 'Kai'];
//   expect(userList).toContain(user);
// });
// 특정 에러인지를 확인하고 싶다면 toThrow에 인자로 주면 된다.
// test('에러 나나?', () => {
//   expect(() => fn.throwErr()).toThrow("xx");
// });

// test('3초 후에 받은 이름은 Mike', (done) => {
//   function callback(name) {
//     expect(name).toBe("Mike");
//     done();
//   };
//   fn.getName(callback);
// });

// test('3초 후에 받아온 나이는 30', () => {
//   expect(fn.getAge().then(age => {
//     expect(age).toBe(30);
//   }));
// });

// rejects를 사용하면 reject 상황도 테스트 가능하다
// async, await을 사용하면 return을 빼고 await으로 사용해도 된다.
// test('3초 후에 받아온 나이는 30', () => {
//   return expect(fn.getAge()).resolves.toBe(30);
// });

// test('3초 후에 받아온 나이는 30', async () => {
//   const age = await fn.getAge();
//   expect(age).toBe(30);
// });

// let num = 0;

// // test를 수행하기 전 수행할 동작
// beforeEach(() => {
//   num = 0;
// })

// // test 수행 직후 수행할 동작
// afterEach(() => {
//   num = 0;
// });

// // test 전체 수행 전 수행할 동작
// beforeAll()

// // test 전체 수행 후 수행할 동작
// afterAll()

// describe 안에 있는 beforeAll, beforeEach, afterEach, afterAll은 밖에 있는 같은 함수보다 먼저 실행된다.

// test.only를 사용하면 해당 테스트케이스만 테스트 가능하다.
// test.only("~~~", () => {
//   expect('~~~').toBe('~~~')
// });

// test.skip을 통해 해당 테스트케이스를 건너뛸 수 있다.
test.skip('~~~', () => {
  expect('~~').toBe('~~~');
});

// Mock 함수
// 테스트만을 위한 해당 함수를 흉내낸 함수
// const mockFn = jest.fn();

// test('함수는 2번 호출됩니다.', () => {
//   expect(mockFn.mock.calls.length).toBe(2);
// })

// test('2번째로 호출된 함수에 전달된 첫번째 인수는 1입니다.', () => {
//   expect(mockFn.mock.calls[1][0]).toBe(1);
// })

// const mockFn = jest.fn();

// function forEachAdd1(arr){
//   arr.forEach(num => {
//     mockFn(num + 1)
//   });
// };

// forEachAdd1([10, 20, 30]);

// test('함수 호출은 3번 됩니다.', () => {
//   expect(mockFn.mock.calls.length).toBe(3);
// });

// test('전달된 값은 11, 21, 31 입니다.', () => {
//   expect(mockFn.mock.calls[0][0]).toBe(11);
//   expect(mockFn.mock.calls[1][0]).toBe(21);
//   expect(mockFn.mock.calls[2][0]).toBe(31);
// });

// const mockFn = jest.fn(num => num + 1);

// mockFn(10);
// mockFn(20);
// mockFn(30);

// test('10에서 1 증가한 값이 반환된다.', () => {
//   expect(mockFn.mock.results[0].value).toBe(11);
// });

// test('20에서 1 증가한 값이 반환된다.', () => {
//   expect(mockFn.mock.results[1].value).toBe(21);
// });

// test('30에서 1 증가한 값이 반환된다.', () => {
//   expect(mockFn.mock.results[2].value).toBe(31);
// });

// // mockFn.mock.results에는 type과 value 를 가지는 배열 형태로 저장된다.
// // mockFn에 사용 가능한 matcher

// test('한번 이상 호출', () => {
//   expect(mockFn).toBeCalled();
// });

// test('정확히 3번 호출', () => {
//   expect(mockFn).toBeCalledTimes(3);
// });

// test('10이랑 20 전달받은 함수가 있는가', () => {
//   expect(mockFn).toBeCalledWith(10, 20);
// });

// test('마지막 함수는 30이랑 40을 받았는가', () => {
//   expect(mockFn).lastCalledWith(30, 40);
// });
