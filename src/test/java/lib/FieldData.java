package lib;

public class FieldData<T, U>{
	public T key;
	public U value;

	public FieldData(T k, U v) {
		this.key = k;
		this.value = v;
	}
}
