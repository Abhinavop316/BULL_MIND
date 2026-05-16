import { create } from "zustand";

interface User {
  id: string;

  email: string;

  fullname: {
    firstname: string;
    lastname: string;
  };
}

interface AuthState {
  user: User | null;

  token: string | null;

  setAuth: (user: User, token: string) => void;

  logout: () => void;

  loadUser: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,

  token: null,

  setAuth: (user, token) => {
    localStorage.setItem("token", token);

    localStorage.setItem("user", JSON.stringify(user));

    set({
      user,
      token,
    });
  },

  logout: () => {
    localStorage.removeItem("token");

    localStorage.removeItem("user");

    set({
      user: null,
      token: null,
    });
  },

  loadUser: () => {
    const token = localStorage.getItem("token");

    const user = localStorage.getItem("user");

    if (token && user) {
      set({
        token,
        user: JSON.parse(user),
      });
    }
  },
}));
