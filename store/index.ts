"use client";

import { toast } from "react-hot-toast";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Crew, Movie, Person } from "../@types";
// persist method

type ID = string | number;

const initialState = {
    movies: new Map<ID, Movie>(),
    persons: new Map<ID, Person | Crew>(),
};

export const useLocalStore = create<CacheStore, [["zustand/persist", CacheStore]]>(
    persist(
        (set, get) => ({
            ...initialState,
            addMovie: (item) => {
                get().movies.set(item.id, item);
                toast.success("Movie Added To Favourites!");
            },
            removeMovie: (data) => {
                get().movies.delete(data.id);
                toast.success("Movie Removed From Favourites!");
            },
            addPerson(person) {
                get().persons.set(person.id, person);
                toast.success("Person Added To Favourites!");
            },
            removePerson(person) {
                get().persons.delete(person.id);
                toast.success("Person Removed From Favourites!");
            },
            resetPersons() {
                set((s) => ({
                    ...s,
                    persons: new Map(),
                }));
                toast.success("Cleared Favourited Movies!");
            },
            resetMovies() {
                set((s) => ({
                    ...s,
                    movies: new Map(),
                }));
                toast.success("Cleared Favourited Persons!");
            },
            resetState: () => {
                set(() => ({ ...initialState }));
                toast.success("CacheStorage Cleared Success!");
            },
        }),
        {
            name: "mflux-cache", // name of item in the storage (must be unique)
            getStorage: () => localStorage, // (optional) by default the 'localStorage' is used
        }
    )
);

type store = typeof initialState;

interface CacheStore extends store {
    resetState: () => void;
    removeMovie: (data: Movie) => void;
    addMovie: (item: Movie) => void;
    addPerson: (person: Person | Crew) => void;
    removePerson: (person: Person | Crew) => void;
    resetPersons: () => void;
    resetMovies: () => void;
}
