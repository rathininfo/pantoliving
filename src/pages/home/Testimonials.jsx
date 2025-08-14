import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Star } from "lucide-react";

const testimonials = [
  {
    image: "https://i.ibb.co.com/2d3gWPH/download.jpg",
    profile: "https://i.ibb.co.com/2d3gWPH/download.jpg",
    name: "Bang Upin",
    role: "Pedagang Asongan",
    text: "Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal",
    rating: 4,
  },
  {
    image: "https://i.ibb.co.com/VMXJbtH/download-7.jpg",
    profile: "https://i.ibb.co.com/VMXJbtH/download-7.jpg",
    name: "Ibuk Sukijan",
    role: "Ibu Rumah Tangga",
    text: "Makasih Panto, aku sekarang berasa tinggal di apartement karena barang-barang yang terlihat mewah",
    rating: 5,
  },
  {
    image: "https://i.ibb.co.com/3sLDtTY/images-1.jpg",
    profile: "https://i.ibb.co.com/3sLDtTY/images-1.jpg",
    name: "Mpok Ina",
    role: "Karyawan Swasta",
    text: "Sangat terjangkau untuk kantong saya yang tidak terlalu banyak",
    rating: 4,
  },
    {
    image: "https://i.ibb.co.com/LxMsjcs/download-9.jpg",
    profile: "https://i.ibb.co.com/LxMsjcs/download-9.jpg",
    name: "Mpok Ina",
    role: "Karyawan Swasta",
    text: "Sangat terjangkau untuk kantong saya yang tidak terlalu banyak",
    rating: 4,
  },
    {
    image: "https://i.ibb.co.com/6BgdkzR/images-3.jpg",
    profile: "https://i.ibb.co.com/6BgdkzR/images-3.jpg",
    name: "Mpok Ina",
    role: "Karyawan Swasta",
    text: "Sangat terjangkau untuk kantong saya yang tidak terlalu banyak",
    rating: 4,
  },
    {
    image: "https://i.ibb.co.com/yhtvNFZ/download-11.jpg",
    profile: "https://i.ibb.co.com/yhtvNFZ/download-11.jpg",
    name: "Mpok Ina",
    role: "Karyawan Swasta",
    text: "Sangat terjangkau untuk kantong saya yang tidak terlalu banyak",
    rating: 4,
  },
    {
    image: "https://i.ibb.co.com/jh89tN4/image-sub-copyright-30-570x696.jpg",
    profile: "https://i.ibb.co.com/jh89tN4/image-sub-copyright-30-570x696.jpg",
    name: "Mpok Ina",
    role: "Karyawan Swasta",
    text: "Sangat terjangkau untuk kantong saya yang tidak terlalu banyak",
    rating: 4,
  },
    {
    image: "https://i.ibb.co.com/kgZd67s/image-sub-copyright-31-570x696.jpg",
    profile: "https://i.ibb.co.com/kgZd67s/image-sub-copyright-31-570x696.jpg",
    name: "Mpok Ina",
    role: "Karyawan Swasta",
    text: "Sangat terjangkau untuk kantong saya yang tidak terlalu banyak",
    rating: 4,
  },
    {
    image: "https://i.ibb.co.com/0cTzD3q/download-6.jpg",
    profile: "https://i.ibb.co.com/0cTzD3q/download-6.jpg",
    name: "Mpok Ina",
    role: "Karyawan Swasta",
    text: "Sangat terjangkau untuk kantong saya yang tidak terlalu banyak",
    rating: 4,
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="text-center mb-12">
        <p className="text-orange-500 tracking-widest uppercase font-semibold">
          Testimonials
        </p>
        <h2 className="text-3xl font-bold">Our Client Reviews</h2>
      </div>

      <div className="relative w-full max-w-6xl mx-auto">
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: ".prev-btn",
            nextEl: ".next-btn",
          }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-10"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                {/* Background Image */}
                <div
                  className="h-56 bg-cover bg-center"
                  style={{ backgroundImage: `url(${t.image})` }}
                ></div>

                {/* Card Content */}
                <div className="p-4 text-center relative">
                  <img
                    src={t.profile}
                    alt={t.name}
                    className="w-14 h-14 rounded-full border-4 border-white absolute left-1/2 -top-7 transform -translate-x-1/2"
                  />
                  <h3 className="font-bold mt-8">{t.name}</h3>
                  <p className="text-sm text-gray-500">{t.role}</p>
                  <p className="mt-3 text-gray-600 text-sm">{t.text}</p>

                  {/* Rating */}
                  <div className="flex justify-center mt-3">
                    {[...Array(5)].map((_, starIndex) => (
                      <Star
                        key={starIndex}
                        size={18}
                        className={
                          starIndex < t.rating
                            ? "fill-orange-400 text-orange-400"
                            : "text-gray-300"
                        }
                      />
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <button className="prev-btn absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-100 z-10">
          <svg width="20" height="20" fill="currentColor">
            <path d="M12.293 4.293a1 1 0 010 1.414L8.414 9.586H18a1 1 0 110 2H8.414l3.879 3.879a1 1 0 01-1.414 1.414l-5.586-5.586a1 1 0 010-1.414l5.586-5.586a1 1 0 011.414 0z" />
          </svg>
        </button>

        <button className="next-btn absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-100 z-10">
          <svg width="20" height="20" fill="currentColor">
            <path d="M7.707 15.707a1 1 0 010-1.414L11.586 11H2a1 1 0 110-2h9.586L7.707 5.707a1 1 0 011.414-1.414l5.586 5.586a1 1 0 010 1.414l-5.586 5.586a1 1 0 01-1.414 0z" />
          </svg>
        </button>
      </div>
    </section>
  );
}
