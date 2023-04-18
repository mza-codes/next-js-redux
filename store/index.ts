"use client";

import { toast } from "react-hot-toast";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { Crew, Movie, Person } from "../@types";

const initialState = {
    movies: [],
    persons: [],
};

export const useLocalStore = create<CacheStore, [["zustand/persist", CacheStore]]>(
    persist(
        (set, get) => ({
            ...initialState,
            addMovie: (item) => {
                let newArray: Movie[] = [];
                if (get().movies.length > 0) {
                    newArray = get().movies.filter((m) => m.id !== item.id);
                }
                newArray.push(item);

                set((s) => ({
                    ...s,
                    movies: newArray,
                }));
                toast.success("Movie Added To Favourites!");
            },
            removeMovie: (data) => {
                const newArray = get().movies.filter((m) => m.id !== data.id);
                set((s) => ({
                    ...s,
                    movies: newArray,
                }));
                toast.success("Movie Removed From Favourites!");
            },
            addPerson(person) {
                let newArray: Person[] | Crew[] = [];
                if (get().persons.length > 0) {
                    // @ts-ignore
                    newArray = get().persons.filter((p) => p.id !== person.id) ?? [];
                }
                // @ts-ignore
                newArray.push(person);

                set((s) => ({ ...s, persons: newArray }));
                toast.success("Person Added To Favourites!");
            },
            removePerson(person) {
                // @ts-ignore
                const newArray = get().persons.filter((p) => p.id !== person.id) ?? [];
                set((s) => ({ ...s, persons: newArray }));
                toast.success("Person Removed From Favourites!");
            },
            resetPersons() {
                set((s) => ({
                    ...s,
                    persons: [],
                }));
                toast.success("Cleared Favourited Movies!");
            },
            resetMovies() {
                set((s) => ({
                    ...s,
                    movies: [],
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

type store = {
    movies: Movie[];
    persons: Person[] | Crew[];
};

interface CacheStore extends store {
    resetState: () => void;
    removeMovie: (data: Movie) => void;
    addMovie: (item: Movie) => void;
    addPerson: (person: Person | Crew) => void;
    removePerson: (person: Person | Crew) => void;
    resetPersons: () => void;
    resetMovies: () => void;
}
