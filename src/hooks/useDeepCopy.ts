const useDeepCopy = () => {
    const deepCopy = (arr: any[]): any[] => {
        const copy: string[][] = [];
        arr.forEach((elem) => {
            if (Array.isArray(elem)) {
                copy.push(deepCopy(elem));
            } else {
                copy.push(elem);
            }
        });
        return copy;
    };
    return [deepCopy];
};

export default useDeepCopy;
