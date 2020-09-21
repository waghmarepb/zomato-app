/*
    @Project: Zomato API Demo
    @Author: Ashish Vishwakarma
*/

export interface IRestaurants {
    id?: number;
    name?: string;
    url?: string;
    location?: IRestaurantsLocation;
    average_cost_for_two?: number;
    price_range?: number;
    currency?: string;
    thumb?: string;
    featured_image?: string;
    photos_url?: string;
    menu_url?: string;
    events_url?: string;
    user_rating?: IUserRating;
    has_online_delivery?: boolean;
    is_delivering_now?: boolean;
    has_table_booking?: boolean;
    deeplink?: string;
    cuisines?: string;
    all_reviews_count?: number;
    photo_count?: number;
    phone_numbers?: string;
    photos?: IPhoto[];
    all_reviews?: IReview[];
}

export interface IRestaurantsLocation {
    address?: string;
    locality?: string;
    city?: string;
    latitude?: number;
    longitude?: number;
    zipcode?: string;
    country_id?: number;
}

export interface IUserRating {
    aggregate_rating?: number;
    rating_text?: string;
    rating_color?: string;
    votes?: number;
}

export interface IPhoto {
    id?: string;
    url?: string;
    thumb_url?: string;
    user?: IUser;
    res_id?: number;
    caption?: string;
    timestamp?: number;
    friendly_time?: string;
    width?: number;
    height?: number;
    comments_count?: number;
    likes_count?: number;
}

export interface IUser {
    name?: string;
    zomato_handle?: string;
    foodie_level?: string;
    foodie_level_num?: number;
    foodie_color?: string;
    profile_url?: string;
    profile_deeplink?: string;
    profile_image?: string;
}

export interface IReview {
    rating?: number;
    review_text?: string;
    id?: number;
    rating_color?: string;
    review_time_friendly?: string;
    rating_text?: string;
    timestamp?: number;
    likes?: number;
    user?: IUser;
    comments_count?: number;
}
