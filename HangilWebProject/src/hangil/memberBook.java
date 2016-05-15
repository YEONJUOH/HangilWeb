package hangil;

import java.util.ArrayList;
import java.util.List;

public class memberBook {

	List<Member> mBook = new ArrayList<Member>();

	public String checkId(String id) {

		for (Member m : mBook) {
			if (m.getId().equals(id))
				return "1";
		}
		return "0";

	}

	// public Member(String id, String pwd, String email, String name)
	public void addM(String id, String pwd, String email, String name) {

		mBook.add(new Member(id, pwd, email, name));

	}

	public int getSize() {
		return mBook.size();

	}

 

}
