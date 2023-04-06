```js
<>
<Image
                alt="Movie_Poster"
                className={`load-pacleholder min-h-[400px] rounded-md object-cover min-w-[280px] shadow-lg hover:shadow-md`}
                src={
                    movie?.poster_path
                        ? w500 + movie?.poster_path
                        : movie?.backdrop_path
                        ? w500 + movie?.backdrop_path
                        : "/404.jpg"
                }
                width={400}
                height={280}
                onLoadingComplete={(current) => current.classList.remove("load-pacleholder")}
                onError={handleError}
                priority={true}
            />
            </>
```
