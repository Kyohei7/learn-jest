test('string', () => {
    const name = "Muhammad Rizki"

    expect(name).toBe("Muhammad Rizki")
    expect(name).toEqual("Muhammad Rizki")
    expect(name).toMatch(/izki/)

})