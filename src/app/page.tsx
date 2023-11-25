import Image from "next/image";
export default function Home() {
  return (
    //relative flex items-end max-w-screen-xl mx-auto
    <main className="flex flex-col items-center min-h-screen bg-white">
      <div className="flex flex-col items-center h-64 xl:h-96 w-full p-4 bg-indigo-700 mt-16">
        <div className=" w-full xl:w-[1200px] mt-8 md:mt-2 2xl:mt-16">
          <p className="text-lg md:text-2xl mt-4 my-auto flex items-center text-white">
            더 나은 디스코드 서버를 위해
          </p>
          <p className="font-semibold text-lg md:text-2xl my-auto flex items-center text-white">
            쉬운 유저 디스코드 서버 전용 스토어
          </p>
          <h2 className="text-3xl md:text-5xl mt-4 my-auto flex items-center text-white font-bold mt-6">
            Cornbot Store
          </h2>
        </div>
      </div>
      <div className="w-full xl:w-[1200px] mt-10 sm:px-2 lg:px-4 px-6">
        <div className="flex items-center space-x-2">
          <h1 className="text-3xl font-bold">겜섭의 스토어</h1>
          <svg
            width="30px"
            height="30px"
            viewBox="0 -0.5 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.9426 8.674C10.9426 8.25979 10.6068 7.924 10.1926 7.924C9.77842 7.924 9.44263 8.25979 9.44263 8.674H10.9426ZM15.5566 8.674C15.5566 8.25979 15.2208 7.924 14.8066 7.924C14.3924 7.924 14.0566 8.25979 14.0566 8.674H15.5566ZM9.44274 8.66112C9.43563 9.07527 9.76559 9.41677 10.1797 9.42389C10.5939 9.43101 10.9354 9.10104 10.9425 8.68688L9.44274 8.66112ZM10.9525 8.10488C10.9596 7.69073 10.6297 7.34923 10.2155 7.34211C9.80136 7.33499 9.45986 7.66496 9.45274 8.07912L10.9525 8.10488ZM10.9201 8.85645C11.0209 8.45468 10.7769 8.04729 10.3751 7.94653C9.97331 7.84577 9.56593 8.08978 9.46516 8.49155L10.9201 8.85645ZM10.0356 9.3L10.7613 9.48948L10.7631 9.48245L10.0356 9.3ZM8.60872 10.8759L8.8691 11.5792H8.8691L8.60872 10.8759ZM6.927 9.99268C6.58662 9.75665 6.11934 9.84124 5.88331 10.1816C5.64728 10.522 5.73187 10.9893 6.07226 11.2253L6.927 9.99268ZM7.24959 10.6167C7.25384 10.2025 6.92151 9.86328 6.50732 9.85904C6.09312 9.85479 5.75392 10.1871 5.74967 10.6013L7.24959 10.6167ZM6.44463 15.976L7.19458 15.985L7.19459 15.9837L6.44463 15.976ZM7.02186 17.4058L6.48838 17.9329H6.48838L7.02186 17.4058ZM8.44463 18V17.25H8.44458L8.44463 18ZM10.4996 18.75C10.9138 18.75 11.2496 18.4142 11.2496 18C11.2496 17.5858 10.9138 17.25 10.4996 17.25V18.75ZM6.07039 11.224C6.41006 11.4611 6.87759 11.3779 7.11465 11.0382C7.35172 10.6986 7.26854 10.231 6.92887 9.99398L6.07039 11.224ZM5.57863 8.092L4.87557 7.83085C4.86723 7.85329 4.85997 7.87612 4.85382 7.89926L5.57863 8.092ZM6.41363 5.844L7.1167 6.10515C7.12393 6.08569 7.13034 6.06594 7.13593 6.04594L6.41363 5.844ZM7.52263 5V4.25L7.52046 4.25L7.52263 5ZM17.4756 5L17.4778 4.25H17.4756V5ZM18.5846 5.844L17.8623 6.04595C17.8679 6.0659 17.8743 6.08562 17.8815 6.10505L18.5846 5.844ZM19.4196 8.093L20.1445 7.90034C20.1383 7.87721 20.1311 7.85439 20.1227 7.83195L19.4196 8.093ZM18.0701 9.99422C17.7305 10.2315 17.6476 10.699 17.8848 11.0386C18.1221 11.3781 18.5897 11.461 18.9292 11.2238L18.0701 9.99422ZM9.74963 18C9.74963 18.4142 10.0854 18.75 10.4996 18.75C10.9138 18.75 11.2496 18.4142 11.2496 18H9.74963ZM13.7496 18C13.7496 18.4142 14.0854 18.75 14.4996 18.75C14.9138 18.75 15.2496 18.4142 15.2496 18H13.7496ZM10.4996 17.25C10.0854 17.25 9.74963 17.5858 9.74963 18C9.74963 18.4142 10.0854 18.75 10.4996 18.75V17.25ZM14.4996 18.75C14.9138 18.75 15.2496 18.4142 15.2496 18C15.2496 17.5858 14.9138 17.25 14.4996 17.25V18.75ZM14.0567 8.68302C14.0617 9.0972 14.4015 9.42893 14.8157 9.42395C15.2298 9.41896 15.5616 9.07916 15.5566 8.66498L14.0567 8.68302ZM15.5496 8.08298C15.5446 7.6688 15.2048 7.33707 14.7906 7.34205C14.3764 7.34704 14.0447 7.68684 14.0497 8.10102L15.5496 8.08298ZM15.5369 8.49073C15.4357 8.08907 15.028 7.84552 14.6264 7.94674C14.2247 8.04796 13.9811 8.45562 14.0824 8.85727L15.5369 8.49073ZM14.9666 9.297L14.2393 9.48028L14.2409 9.48622L14.9666 9.297ZM16.3915 10.8729L16.1304 11.5759L16.3915 10.8729ZM18.926 11.226C19.2667 10.9906 19.3521 10.5235 19.1167 10.1827C18.8812 9.84189 18.4141 9.7565 18.0733 9.99195L18.926 11.226ZM19.2496 10.6017C19.2456 10.1875 18.9066 9.85502 18.4924 9.85904C18.0782 9.86305 17.7457 10.2021 17.7497 10.6163L19.2496 10.6017ZM18.5516 15.976L17.8017 15.9833L17.8017 15.985L18.5516 15.976ZM17.9744 17.4058L17.4409 16.8786L17.9744 17.4058ZM16.5516 18L16.5517 17.25H16.5516V18ZM14.4996 17.25C14.0854 17.25 13.7496 17.5858 13.7496 18C13.7496 18.4142 14.0854 18.75 14.4996 18.75V17.25ZM9.44263 8.674C9.44263 10.3623 10.8113 11.731 12.4996 11.731V10.231C11.6397 10.231 10.9426 9.53391 10.9426 8.674H9.44263ZM12.4996 11.731C14.188 11.731 15.5566 10.3623 15.5566 8.674H14.0566C14.0566 9.53391 13.3595 10.231 12.4996 10.231V11.731ZM10.9425 8.68688L10.9525 8.10488L9.45274 8.07912L9.44274 8.66112L10.9425 8.68688ZM9.46516 8.49155L9.30816 9.11755L10.7631 9.48245L10.9201 8.85645L9.46516 8.49155ZM9.30996 9.11053C9.18207 9.60032 8.82307 9.9968 8.34835 10.1725L8.8691 11.5792C9.80324 11.2334 10.5097 10.4533 10.7613 9.48947L9.30996 9.11053ZM8.34835 10.1725C7.87362 10.3483 7.34299 10.2811 6.927 9.99268L6.07226 11.2253C6.89081 11.7929 7.93496 11.9251 8.8691 11.5792L8.34835 10.1725ZM5.74967 10.6013L5.69467 15.9683L7.19459 15.9837L7.24959 10.6167L5.74967 10.6013ZM5.69469 15.967C5.68586 16.702 5.9717 17.41 6.48838 17.9329L7.55535 16.8786C7.32049 16.6409 7.19057 16.3191 7.19458 15.985L5.69469 15.967ZM6.48838 17.9329C7.00507 18.4558 7.70959 18.7501 8.44469 18.75L8.44458 17.25C8.11044 17.25 7.7902 17.1163 7.55535 16.8786L6.48838 17.9329ZM8.44463 18.75H10.4996V17.25H8.44463V18.75ZM6.92887 9.99398C6.38194 9.61226 6.13204 8.92931 6.30344 8.28474L4.85382 7.89926C4.52041 9.15305 5.00651 10.4815 6.07039 11.224L6.92887 9.99398ZM6.2817 8.35315L7.1167 6.10515L5.71057 5.58285L4.87557 7.83085L6.2817 8.35315ZM7.13593 6.04594C7.18473 5.8714 7.34356 5.75052 7.5248 5.75L7.52046 4.25C6.66795 4.25247 5.92088 4.82103 5.69133 5.64206L7.13593 6.04594ZM7.52263 5.75H17.4756V4.25H7.52263V5.75ZM17.4735 5.75C17.6547 5.75052 17.8135 5.8714 17.8623 6.04595L19.3069 5.64205C19.0774 4.82103 18.3303 4.25247 17.4778 4.25L17.4735 5.75ZM17.8815 6.10505L18.7165 8.35405L20.1227 7.83195L19.2877 5.58295L17.8815 6.10505ZM18.6948 8.28566C18.866 8.92987 18.6164 9.61242 18.0701 9.99422L18.9292 11.2238C19.9921 10.4811 20.4775 9.15344 20.1445 7.90034L18.6948 8.28566ZM11.2496 18V15H9.74963V18H11.2496ZM11.2496 15C11.2496 14.8619 11.3616 14.75 11.4996 14.75V13.25C10.5331 13.25 9.74963 14.0335 9.74963 15H11.2496ZM11.4996 14.75H13.4996V13.25H11.4996V14.75ZM13.4996 14.75C13.6377 14.75 13.7496 14.8619 13.7496 15H15.2496C15.2496 14.0335 14.4661 13.25 13.4996 13.25V14.75ZM13.7496 15V18H15.2496V15H13.7496ZM10.4996 18.75H14.4996V17.25H10.4996V18.75ZM15.5566 8.66498L15.5496 8.08298L14.0497 8.10102L14.0567 8.68302L15.5566 8.66498ZM14.0824 8.85727L14.2394 9.48027L15.6939 9.11373L15.5369 8.49073L14.0824 8.85727ZM14.2409 9.48622C14.492 10.4494 15.1973 11.2294 16.1304 11.5759L16.6526 10.1698C16.1784 9.99367 15.82 9.59726 15.6924 9.10778L14.2409 9.48622ZM16.1304 11.5759C17.0635 11.9225 18.107 11.7919 18.926 11.226L18.0733 9.99195C17.6571 10.2795 17.1268 10.3459 16.6526 10.1698L16.1304 11.5759ZM17.7497 10.6163L17.8017 15.9833L19.3016 15.9687L19.2496 10.6017L17.7497 10.6163ZM17.8017 15.985C17.8057 16.3191 17.6758 16.6409 17.4409 16.8786L18.5079 17.9329C19.0246 17.41 19.3104 16.702 19.3016 15.967L17.8017 15.985ZM17.4409 16.8786C17.2061 17.1163 16.8858 17.25 16.5517 17.25L16.5516 18.75C17.2867 18.7501 17.9912 18.4558 18.5079 17.9329L17.4409 16.8786ZM16.5516 17.25H14.4996V18.75H16.5516V17.25Z"
              fill="#000000"
            />
          </svg>
        </div>
        <div className="flex mt-6 grid sm:grid-cols-4 grid-cols-2 place-items-center gap-x-4">
          <div className="group relative rounded-xl mb-8">
            <div className="overflow-hidden rounded-xl bg-gray-200 group-hover:opacity-75">
              <img
                src="https://mblogthumb-phinf.pstatic.net/MjAxODAzMDNfMjU4/MDAxNTIwMDQxODA4Mjc0.gR3L5xx3IbpACbvRRF9j9xjJmO-EPAY35oF1AdBnDcog.WZyeqFi6cMmH-v-R-ec44Ny6ZgVyAJIYMT78p4Rxbkwg.PNG.osy2201/2_%2850%ED%8D%BC%EC%84%BC%ED%8A%B8_%ED%9A%8C%EC%83%89%29_%ED%9A%8C%EC%83%89_%EB%8B%A8%EC%83%89_%EB%B0%B0%EA%B2%BD%ED%99%94%EB%A9%B4_180303.png?type=w800"
                alt="상품 미리보기 이미지"
                className="dark:bg-gray-900 object-cover object-center w-60 h-40"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <p className="mt-1 text-sm text-gray-500">이모지+</p>
                <h3 className="text-sm text-gray-700 dark:text-gray-200">
                  <span aria-hidden="true" className="absolute inset-0"></span>
                  [11.25~] 크리스마스 기념 이모지 🎄
                </h3>
                <p className="text-lg font-bold text-gray-900 dark:text-gray-100">
                  1,000코인
                </p>
              </div>
            </div>
          </div>
          <div className="group relative rounded-xl mb-8">
            <div className="overflow-hidden rounded-xl bg-gray-200 group-hover:opacity-75">
              <img
                src="https://mblogthumb-phinf.pstatic.net/MjAxODAzMDNfMjU4/MDAxNTIwMDQxODA4Mjc0.gR3L5xx3IbpACbvRRF9j9xjJmO-EPAY35oF1AdBnDcog.WZyeqFi6cMmH-v-R-ec44Ny6ZgVyAJIYMT78p4Rxbkwg.PNG.osy2201/2_%2850%ED%8D%BC%EC%84%BC%ED%8A%B8_%ED%9A%8C%EC%83%89%29_%ED%9A%8C%EC%83%89_%EB%8B%A8%EC%83%89_%EB%B0%B0%EA%B2%BD%ED%99%94%EB%A9%B4_180303.png?type=w800"
                alt="상품 미리보기 이미지"
                className="dark:bg-gray-900 object-cover object-center w-60 h-40"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <p className="mt-1 text-sm text-gray-500">이모지+</p>
                <h3 className="text-sm text-gray-700 dark:text-gray-200">
                  <span aria-hidden="true" className="absolute inset-0"></span>
                  [11.25~] 크리스마스 기념 이모지 🎄
                </h3>
                <p className="text-lg font-bold text-gray-900 dark:text-gray-100">
                  1,000코인
                </p>
              </div>
            </div>
          </div>
          <div className="group relative rounded-xl mb-8">
            <div className="overflow-hidden rounded-xl bg-gray-200 group-hover:opacity-75">
              <img
                src="https://mblogthumb-phinf.pstatic.net/MjAxODAzMDNfMjU4/MDAxNTIwMDQxODA4Mjc0.gR3L5xx3IbpACbvRRF9j9xjJmO-EPAY35oF1AdBnDcog.WZyeqFi6cMmH-v-R-ec44Ny6ZgVyAJIYMT78p4Rxbkwg.PNG.osy2201/2_%2850%ED%8D%BC%EC%84%BC%ED%8A%B8_%ED%9A%8C%EC%83%89%29_%ED%9A%8C%EC%83%89_%EB%8B%A8%EC%83%89_%EB%B0%B0%EA%B2%BD%ED%99%94%EB%A9%B4_180303.png?type=w800"
                alt="상품 미리보기 이미지"
                className="dark:bg-gray-900 object-cover object-center w-60 h-40"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <p className="mt-1 text-sm text-gray-500">이모지+</p>
                <h3 className="text-sm text-gray-700 dark:text-gray-200">
                  <span aria-hidden="true" className="absolute inset-0"></span>
                  [11.25~] 크리스마스 기념 이모지 🎄
                </h3>
                <p className="text-lg font-bold text-gray-900 dark:text-gray-100">
                  1,000코인
                </p>
              </div>
            </div>
          </div>
          <div className="group relative rounded-xl mb-8">
            <div className="overflow-hidden rounded-xl bg-gray-200 group-hover:opacity-75">
              <img
                src="https://mblogthumb-phinf.pstatic.net/MjAxODAzMDNfMjU4/MDAxNTIwMDQxODA4Mjc0.gR3L5xx3IbpACbvRRF9j9xjJmO-EPAY35oF1AdBnDcog.WZyeqFi6cMmH-v-R-ec44Ny6ZgVyAJIYMT78p4Rxbkwg.PNG.osy2201/2_%2850%ED%8D%BC%EC%84%BC%ED%8A%B8_%ED%9A%8C%EC%83%89%29_%ED%9A%8C%EC%83%89_%EB%8B%A8%EC%83%89_%EB%B0%B0%EA%B2%BD%ED%99%94%EB%A9%B4_180303.png?type=w800"
                alt="상품 미리보기 이미지"
                className="dark:bg-gray-900 object-cover object-center w-60 h-40"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <p className="mt-1 text-sm text-gray-500">이모지+</p>
                <h3 className="text-sm text-gray-700 dark:text-gray-200">
                  <span aria-hidden="true" className="absolute inset-0"></span>
                  [11.25~] 크리스마스 기념 이모지 🎄
                </h3>
                <p className="text-lg font-bold text-gray-900 dark:text-gray-100">
                  1,000코인
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
