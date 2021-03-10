import noImagePlaceholder from '../assets/no_image.png';


const baseUrl = 'https://api.themoviedb.org/3/';
const apiKey= 'd8532795110a063abc81c58c1a79d440';
const imgw300BaseUrl = 'https://image.tmdb.org/t/p/w300';
// const imgw500BaseUrl = 'https://image.tmdb.org/t/p/w500';



            // ==========Movies==========//
export const getPopularMovies = async( page = 1 ) => {
    
    try {
        
        const resp = await fetch(`${ baseUrl }movie/popular?api_key=${ apiKey }&language=en-US&page=${page}`);
        
        if(resp.status === 422){
            throw new SyntaxError('There is no more pages to navigate');
        }

        if(resp.ok){
            const popularResponse = await resp.json();
            const { results } = popularResponse;
            
             results.map( movie => {
                if( movie.backdrop_path){
                    movie.backdrop_path = `${ imgw300BaseUrl}${movie.backdrop_path}`;
                }else{
                    movie.backdrop_path = `${ noImagePlaceholder }`;
                }

                if( movie.poster_path){
                    movie.poster_path = `${ imgw300BaseUrl}${movie.poster_path}`;
                }else{
                    movie.poster_path = `${ noImagePlaceholder }`;
                }

                return movie
            });

            return results;
        } 
        
    } catch (err) {
        // throw err;
        console.log(err);
    }
    
}

// GET MOVIE DETAILS
export const getMovieDetails = async( id ) => {
    
    try {
        
        const resp = await fetch(`${ baseUrl }movie/${ id }?api_key=${ apiKey }&language=en-US`);

        if(resp.ok){
            const movie = await resp.json();

            if( movie.backdrop_path){
                movie.backdrop_path = `${ imgw300BaseUrl}${movie.backdrop_path}`;
            }else{
                movie.backdrop_path = `${ noImagePlaceholder }`;
            }

            if( movie.poster_path){
                movie.poster_path = `${ imgw300BaseUrl}${movie.poster_path}`;
            }else{
                movie.poster_path = `${ noImagePlaceholder }`;
            }

            return movie;
         
        } 
        
    } catch (err) {
        throw err;
        // console.log(err);
    }
    
}



export const getOnTheatersMovies = async() => {
    
    try {
        
        const resp = await fetch(`${ baseUrl }movie/now_playing?api_key=${ apiKey }&language=en-US&page=1`);
        
        if(resp.ok){
            const onTheatersResponse = await resp.json();
            const { results } = onTheatersResponse;
            
             results.map( movie => {
                if( movie.backdrop_path){
                    movie.backdrop_path = `${ imgw300BaseUrl}${movie.backdrop_path}`;
                }else{
                    movie.backdrop_path = `${ noImagePlaceholder }`;
                }

                if( movie.poster_path){
                    movie.poster_path = `${ imgw300BaseUrl}${movie.poster_path}`;
                }else{
                    movie.poster_path = `${ noImagePlaceholder }`;
                }

                return movie
            });

            return results;
        } 
        
    } catch (error) {
        throw error;
    }
    
}

            // ==========TV Shows==========//
export const getPopularOnTv = async( page = 1) => {
    
    try {
        
        const resp = await fetch(`${ baseUrl }tv/popular?api_key=${ apiKey }&language=en-US&page=${page}`);

        if(resp.status === 422){
            throw new SyntaxError('There is no more pages to navigate');
        }
        
        if(resp.ok){
            const popularResponse = await resp.json();
            const { results } = popularResponse;
            
            results.map( show => {
                if( show.backdrop_path){
                    show.backdrop_path = `${ imgw300BaseUrl}${show.backdrop_path}`;
                }else{
                    show.backdrop_path = `${ noImagePlaceholder }`;
                }

                if( show.poster_path){
                    show.poster_path = `${ imgw300BaseUrl}${show.poster_path}`;
                }else{
                    show.poster_path = `${ noImagePlaceholder }`;
                }

                return show
            });
            
            return results;
        } 
        
    } catch (error) {
        throw error;
    }

}

export const getTvShowDetails = async( id ) => {
    
    try {
        
        const resp = await fetch(`${ baseUrl }tv/${ id }?api_key=${ apiKey }&language=en-US`);

        if(resp.ok){
            const movie = await resp.json();

            if( movie.backdrop_path){
                movie.backdrop_path = `${ imgw300BaseUrl}${movie.backdrop_path}`;
            }else{
                movie.backdrop_path = `${ noImagePlaceholder }`;
            }

            if( movie.poster_path){
                movie.poster_path = `${ imgw300BaseUrl}${movie.poster_path}`;
            }else{
                movie.poster_path = `${ noImagePlaceholder }`;
            }

            return movie;
         
        } 
        
    } catch (err) {
        throw err;
        // console.log(err);
    }
    
}


            // ==========Celebrities==========//
export const getPopularCelebs = async( page = 1 ) => {
    
    try {
        
        const resp = await fetch(`${ baseUrl }person/popular?api_key=${ apiKey }&language=en-US&page=${ page }`);

        if(resp.status === 422){
            throw new SyntaxError('There is no more pages to navigate');
        }
        
        if(resp.ok){
            const popularResponse = await resp.json();
            const { results } = popularResponse;
            
            results.map( celeb => {
                if( celeb.profile_path){
                    celeb.profile_path = `${ imgw300BaseUrl}${celeb.profile_path}`;
                }else{
                    celeb.profile_path = `${ noImagePlaceholder }`;
                }
                
                return celeb
            });
            
            return results;
        } 
        
    } catch (error) {
        throw error;
    }

}

// Get celeb details
// https://api.themoviedb.org/3/person/1245?api_key=d8532795110a063abc81c58c1a79d440&language=en-US

export const getCelebDetails = async( id ) => {
    
    try {
        
        const resp = await fetch(`${ baseUrl }person/${ id }?api_key=${ apiKey }&language=en-US`);

        if(resp.ok){
            const celeb = await resp.json();

            if( celeb.profile_path){
                celeb.profile_path = `${ imgw300BaseUrl}${celeb.profile_path}`;
            }else{
                celeb.profile_path = `${ noImagePlaceholder }`;
            }

            return celeb;
         
        } 
        
    } catch (err) {
        throw err;
    }
    
}