const viewMeta = {
  overview: ["운영 현황", "대형 마트 코너별 광고 콘텐츠와 10대 모니터의 상태를 확인합니다."],
  media: ["미디어 업로드", "코너별 동영상·이미지 광고 30개를 조회하고 관리합니다."],
  devices: ["모니터 등록", "매장 내 10개 코너 모니터의 등록 정보와 연결 상태를 확인합니다."],
  playlists: ["플레이리스트 관리", "코너별 미디어 재생 순서와 대상 모니터 매핑을 확인합니다."],
  urgent: ["긴급 광고", "운영 중인 코너 화면에 긴급 할인 콘텐츠를 우선 삽입합니다."],
};

const mediaItems = [
  { id: 1, name: "매장 환영 영상", type: "video", file: "store_welcome.mp4", tags: "입구, 공통", duration: 45 },
  { id: 2, name: "금주의 전관 행사", type: "image", file: "weekly_store_sale.jpg", tags: "입구, 공통", duration: 12 },
  { id: 3, name: "멤버십 혜택 안내", type: "video", file: "membership_benefit.mp4", tags: "입구, 멤버십", duration: 35 },
  { id: 4, name: "계산대 카드 할인", type: "image", file: "checkout_card_discount.jpg", tags: "계산대, 할인", duration: 10 },
  { id: 5, name: "포인트 적립 안내", type: "video", file: "point_reward_guide.mp4", tags: "계산대, 멤버십", duration: 30 },
  { id: 6, name: "친환경 장바구니", type: "image", file: "reusable_bag.jpg", tags: "계산대, 안내", duration: 10 },
  { id: 7, name: "오늘의 신선상품", type: "image", file: "fresh_today.jpg", tags: "신선식품, 행사", duration: 12 },
  { id: 8, name: "신선식품 산지 소개", type: "video", file: "fresh_origin.mp4", tags: "신선식품, 원산지", duration: 50 },
  { id: 9, name: "일일 특가 안내", type: "image", file: "fresh_daily_special.jpg", tags: "신선식품, 할인", duration: 10 },
  { id: 10, name: "오늘의 수산물", type: "video", file: "seafood_today.mp4", tags: "수산물, 행사", duration: 45 },
  { id: 11, name: "회·초밥 특별전", type: "image", file: "sashimi_special.jpg", tags: "수산물, 할인", duration: 12 },
  { id: 12, name: "수산물 원산지 안내", type: "image", file: "seafood_origin.jpg", tags: "수산물, 원산지", duration: 10 },
  { id: 13, name: "한우 특별 할인", type: "video", file: "hanwoo_sale.mp4", tags: "육류, 할인", duration: 50 },
  { id: 14, name: "돼지고기 주말 특가", type: "image", file: "pork_weekend.jpg", tags: "육류, 행사", duration: 12 },
  { id: 15, name: "축산물 이력 안내", type: "image", file: "meat_traceability.jpg", tags: "육류, 안내", duration: 10 },
  { id: 16, name: "제철 과일 영상", type: "video", file: "seasonal_fruit.mp4", tags: "과일, 제철", duration: 40 },
  { id: 17, name: "사과 할인 행사", type: "image", file: "apple_discount.jpg", tags: "과일, 할인", duration: 12 },
  { id: 18, name: "열대과일 기획전", type: "image", file: "tropical_fruit.jpg", tags: "과일, 행사", duration: 10 },
  { id: 19, name: "산지 직송 채소", type: "video", file: "vegetable_farm.mp4", tags: "채소, 산지", duration: 42 },
  { id: 20, name: "친환경 채소전", type: "image", file: "organic_vegetable.jpg", tags: "채소, 친환경", duration: 12 },
  { id: 21, name: "샐러드 레시피", type: "image", file: "salad_recipe.jpg", tags: "채소, 레시피", duration: 10 },
  { id: 22, name: "유제품 신상품", type: "video", file: "dairy_new.mp4", tags: "유제품, 신상품", duration: 38 },
  { id: 23, name: "우유 묶음 할인", type: "image", file: "milk_bundle.jpg", tags: "유제품, 할인", duration: 12 },
  { id: 24, name: "치즈 페스티벌", type: "image", file: "cheese_festival.jpg", tags: "유제품, 행사", duration: 10 },
  { id: 25, name: "갓 구운 빵 영상", type: "video", file: "bakery_fresh.mp4", tags: "베이커리, 신선", duration: 45 },
  { id: 26, name: "마감 빵 타임세일", type: "image", file: "bread_time_sale.jpg", tags: "베이커리, 할인", duration: 12 },
  { id: 27, name: "케이크 예약 안내", type: "image", file: "cake_reservation.jpg", tags: "베이커리, 예약", duration: 10 },
  { id: 28, name: "생활용품 청소특집", type: "video", file: "living_cleaning.mp4", tags: "생활용품, 행사", duration: 40 },
  { id: 29, name: "주방용품 기획전", type: "image", file: "kitchen_goods.jpg", tags: "생활용품, 기획", duration: 12 },
  { id: 30, name: "휴지 묶음 할인", type: "image", file: "tissue_bundle.jpg", tags: "생활용품, 할인", duration: 10 },
];

const devices = [
  { id: 1, name: "계산대 메인 모니터", zone: "계산대", online: true, lastSeen: "12초 전", deviceId: "CHK-7A21-90F3", key: "device-CK9Q3P" },
  { id: 2, name: "매장 입구 웰컴 모니터", zone: "입구", online: true, lastSeen: "방금 전", deviceId: "ENT-19C4-A201", key: "device-EN4V7B" },
  { id: 3, name: "신선식품 코너 모니터", zone: "신선식품", online: true, lastSeen: "8초 전", deviceId: "FRS-82E1-4D07", key: "device-FR8N2M" },
  { id: 4, name: "수산물 코너 모니터", zone: "수산물", online: true, lastSeen: "21초 전", deviceId: "SEA-63B7-CC04", key: "device-SE6K1A" },
  { id: 5, name: "육류 코너 모니터", zone: "육류", online: true, lastSeen: "35초 전", deviceId: "MET-154E-D218", key: "device-MT8K5N" },
  { id: 6, name: "과일 코너 모니터", zone: "과일", online: true, lastSeen: "18초 전", deviceId: "FRT-C921-2AB7", key: "device-FT4R9W" },
  { id: 7, name: "채소 코너 모니터", zone: "채소", online: false, lastSeen: "1시간 12분 전", deviceId: "VEG-04D8-7C15", key: "device-VG7P2X" },
  { id: 8, name: "유제품·냉장 코너 모니터", zone: "유제품·냉장", online: true, lastSeen: "43초 전", deviceId: "DAR-51A9-B830", key: "device-DA3H6J" },
  { id: 9, name: "베이커리 코너 모니터", zone: "베이커리", online: true, lastSeen: "27초 전", deviceId: "BAK-9E22-61C4", key: "device-BK5T8Y" },
  { id: 10, name: "생활용품 코너 모니터", zone: "생활용품", online: false, lastSeen: "2시간 5분 전", deviceId: "LIV-73F0-09D2", key: "device-LV2C7Z" },
];

const playlists = [
  { id: 1, name: "계산대 고객 안내 편성", description: "결제·멤버십·공통 행사 안내", mediaIds: [4, 5, 6, 2], deviceId: 1, version: 8 },
  { id: 2, name: "입구 웰컴 기본 편성", description: "방문 고객 환영 및 전관 행사", mediaIds: [1, 2, 3], deviceId: 2, version: 12 },
  { id: 3, name: "신선식품 오늘의 행사", description: "산지 소개와 일일 특가", mediaIds: [7, 8, 9, 2], deviceId: 3, version: 7 },
  { id: 4, name: "수산물 코너 기본 편성", description: "오늘의 수산물과 원산지 안내", mediaIds: [10, 11, 12, 2], deviceId: 4, version: 6 },
  { id: 5, name: "육류 코너 기본 편성", description: "한우·돼지고기 할인과 이력 안내", mediaIds: [13, 14, 15, 2], deviceId: 5, version: 9 },
  { id: 6, name: "과일 코너 제철 편성", description: "제철 과일과 할인 행사", mediaIds: [16, 17, 18, 2], deviceId: 6, version: 5 },
  { id: 7, name: "채소 코너 건강 편성", description: "산지 직송·친환경·레시피", mediaIds: [19, 20, 21, 2], deviceId: 7, version: 4 },
  { id: 8, name: "유제품·냉장 행사 편성", description: "신상품과 묶음 할인", mediaIds: [22, 23, 24, 2], deviceId: 8, version: 6 },
  { id: 9, name: "베이커리 데일리 편성", description: "신선 베이커리와 타임세일", mediaIds: [25, 26, 27, 2], deviceId: 9, version: 7 },
  { id: 10, name: "생활용품 주간 편성", description: "청소·주방용품 주간 기획전", mediaIds: [28, 29, 30, 2], deviceId: 10, version: 3 },
];

let selectedPlaylistId = 1;

function formatDuration(totalSeconds) {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return [hours, minutes, seconds].map((value) => String(value).padStart(2, "0")).join(":");
}

function renderMedia() {
  document.querySelector("#mediaRows").innerHTML = mediaItems.map((media) => `
    <tr>
      <td><input type="checkbox" aria-label="${media.name} 선택"></td>
      <td>${media.name}</td>
      <td><span class="type ${media.type}">${media.type.toUpperCase()}</span></td>
      <td>${media.file}</td>
      <td>${media.tags}</td>
      <td>${formatDuration(media.duration)}</td>
    </tr>`).join("");
}

function renderDevices() {
  document.querySelector("#deviceRows").innerHTML = devices.map((device) => {
    const playlist = playlists.find((item) => item.deviceId === device.id);
    return `
      <tr>
        <td><input type="checkbox" aria-label="${device.name} 선택"></td>
        <td>${device.name}</td>
        <td>${device.zone}</td>
        <td><span class="badge ${device.online ? "online" : "offline"}">${device.online ? "Online" : "Offline"}</span></td>
        <td>${device.lastSeen}</td>
        <td class="mono">${device.deviceId}</td>
        <td class="mono">${device.key}</td>
        <td>${playlist ? playlist.name : "미지정"}</td>
      </tr>`;
  }).join("");
}

function renderPlaylistList() {
  document.querySelector("#playlistRows").innerHTML = playlists.map((playlist) => {
    const device = devices.find((item) => item.id === playlist.deviceId);
    const selected = playlist.id === selectedPlaylistId;
    return `
      <tr class="${selected ? "selected-row" : ""}" data-playlist-id="${playlist.id}">
        <td><input type="radio" name="playlist" ${selected ? "checked" : ""} aria-label="${playlist.name} 선택"></td>
        <td>${playlist.name}</td>
        <td>${playlist.description}</td>
        <td>${playlist.mediaIds.length}개</td>
        <td>${device.name}</td>
        <td>v${playlist.version}</td>
        <td><button type="button" class="table-button danger" data-demo-action>삭제</button></td>
      </tr>`;
  }).join("");
}

function renderPlaylistDetail() {
  const playlist = playlists.find((item) => item.id === selectedPlaylistId) || playlists[0];
  const assignedMedia = playlist.mediaIds.map((id) => mediaItems.find((media) => media.id === id));
  const totalDuration = assignedMedia.reduce((total, media) => total + media.duration, 0);

  document.querySelector("#playlistDetailTitle").textContent = `${playlist.name} · 편성 미디어`;
  document.querySelector("#playlistDuration").textContent = `전체 재생시간 ${formatDuration(totalDuration)} · ${assignedMedia.length}개 미디어`;
  document.querySelector("#playlistItemRows").innerHTML = assignedMedia.map((media, index) => `
    <tr>
      <td><input type="checkbox" aria-label="${media.name} 선택"></td>
      <td>${index + 1}</td>
      <td>${media.name}</td>
      <td><span class="type ${media.type}">${media.type.toUpperCase()}</span></td>
      <td>${media.type === "image" ? `<input class="duration" type="number" min="1" max="3600" value="${media.duration}" aria-label="${media.name} 표시 시간">` : formatDuration(media.duration)}</td>
      <td><button type="button" class="table-button secondary" data-demo-action aria-label="위로 이동">▲</button> <button type="button" class="table-button secondary" data-demo-action aria-label="아래로 이동">▼</button></td>
    </tr>`).join("");

  document.querySelector("#playlistDeviceOptions").innerHTML = devices.map((device) => `
    <label><input type="checkbox" ${device.id === playlist.deviceId ? "checked" : ""}>${device.name}</label>`).join("");
}

function renderSelectOptions() {
  document.querySelector("#playlistMediaSelect").innerHTML = mediaItems.map((media) => `<option>${media.name} (${media.type})</option>`).join("");
  document.querySelector("#urgentMediaSelect").innerHTML = mediaItems.map((media) => `<option>${media.name} (${media.type})</option>`).join("");
  document.querySelector("#urgentDeviceSelect").innerHTML = `<option>전체 모니터 (10대)</option>${devices.map((device) => `<option>${device.name}</option>`).join("")}`;
}

function activateView(name) {
  const activeName = viewMeta[name] ? name : "overview";
  document.querySelectorAll("[data-view]").forEach((panel) => {
    panel.hidden = panel.dataset.view !== activeName;
  });
  document.querySelectorAll("[data-view-target]").forEach((button) => {
    const active = button.dataset.viewTarget === activeName;
    button.classList.toggle("active", active);
    if (active) button.setAttribute("aria-current", "page");
    else button.removeAttribute("aria-current");
  });
  document.querySelector("#viewTitle").textContent = viewMeta[activeName][0];
  document.querySelector("#viewDescription").textContent = viewMeta[activeName][1];
  history.replaceState(null, "", `#${activeName}`);
}

document.querySelector(".side-nav").addEventListener("click", (event) => {
  const button = event.target.closest("[data-view-target]");
  if (button) activateView(button.dataset.viewTarget);
});

document.querySelectorAll(".demo-form").forEach((form) => {
  form.addEventListener("submit", (event) => event.preventDefault());
});

document.addEventListener("click", (event) => {
  if (event.target.closest("[data-demo-action]")) {
    event.preventDefault();
    return;
  }

  const playlistRow = event.target.closest("[data-playlist-id]");
  if (playlistRow) {
    selectedPlaylistId = Number(playlistRow.dataset.playlistId);
    renderPlaylistList();
    renderPlaylistDetail();
  }
});

window.addEventListener("hashchange", () => activateView(location.hash.slice(1) || "overview"));

renderMedia();
renderDevices();
renderSelectOptions();
renderPlaylistList();
renderPlaylistDetail();
activateView(location.hash.slice(1) || "overview");
