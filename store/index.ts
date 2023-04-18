"use client";

import { toast } from "react-hot-toast";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { Crew, Movie, Person } from "../@types";
// type ID = string | number;

const initialState = {
    // movies: new Map<ID, Movie>(),
    // persons: new Map<ID, Person | Crew>(),
    movies: new Set<Movie>(),
    persons: new Set<Person | Crew>(),
};

export const useLocalStore = create<CacheStore, [["zustand/persist", CacheStore]]>(
    persist(
        (set, get) => ({
            ...initialState,
            addMovie: (item) => {
                get().movies.add(item);
                toast.success("Movie Added To Favourites!");
            },
            removeMovie: (data) => {
                get().movies.delete(data);
                toast.success("Movie Removed From Favourites!");
            },
            addPerson(person) {
                get().persons.add(person);
                toast.success("Person Added To Favourites!");
            },
            removePerson(person) {
                get().persons.delete(person);
                toast.success("Person Removed From Favourites!");
            },
            resetPersons() {
                set((s) => ({
                    ...s,
                    persons: new Set(),
                }));
                toast.success("Cleared Favourited Movies!");
            },
            resetMovies() {
                set((s) => ({
                    ...s,
                    movies: new Set(),
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
            storage: createJSONStorage(() => localStorage),
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
