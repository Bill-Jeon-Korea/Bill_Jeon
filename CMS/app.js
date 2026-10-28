const viewMeta = {
  overview: ["운영 현황", "대형 마트 코너별 광고 콘텐츠와 10대 모니터의 상태를 확인합니다."],
  media: ["미디어 업로드", "코너별 동영상·이미지 광고 30개를 조회하고 관리합니다."],
  devices: ["모니터 등록", "매장 내 10개 코너 모니터의 등록 정보와 연결 상태를 확인합니다."],
  playlists: ["플레이리스트 관리", "코너별 미디어 재생 순서와 대상 모니터 매핑을 확인합니다."],
  urgent: ["긴급 광고", "운영 중인 코너 화면에 긴급 할인 콘텐츠를 우선 삽입합니다."],
  layouts: ["화면구성", "모니터 화면을 최대 4개 영역으로 나누고 크기·위치·겹침 순서를 설정합니다."],
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
let selectedLayoutDeviceId = 2;
let selectedLayoutRegionIndex = 0;
const layoutRegionColors = ["#4f8cff", "#34c49a", "#a86df2", "#f38b5d"];
let layoutDraft = createOverlayLayout(devices.find((device) => device.id === selectedLayoutDeviceId));

function createOverlayLayout(device) {
  return {
    name: `${device?.name || "모니터"} 오버레이 광고 화면`,
    enabled: true,
    aspectRatio: "16:9",
    regions: [
      { name: "A · 메인", playlistId: 2, x: 18, y: 10, width: 64, height: 80, zIndex: 1 },
      { name: "B · 상단", playlistId: 1, x: 25, y: 0, width: 50, height: 14, zIndex: 3 },
      { name: "C · 좌측", playlistId: 3, x: 0, y: 10, width: 22, height: 80, zIndex: 2 },
      { name: "D · 하단", playlistId: 5, x: 25, y: 86, width: 50, height: 14, zIndex: 4 },
    ],
  };
}

function createSingleLayout(device) {
  return {
    name: `${device?.name || "모니터"} 기본 화면`,
    enabled: true,
    aspectRatio: "16:9",
    regions: [{ name: "A · 전체", playlistId: device?.id || 1, x: 0, y: 0, width: 100, height: 100, zIndex: 1 }],
  };
}

function clamp(value, minimum, maximum) {
  return Math.min(maximum, Math.max(minimum, value));
}

function normalizeRegion(region) {
  region.x = Math.round(clamp(Number(region.x) || 0, 0, 95) * 10) / 10;
  region.y = Math.round(clamp(Number(region.y) || 0, 0, 95) * 10) / 10;
  region.width = Math.round(clamp(Number(region.width) || 5, 5, 100 - region.x) * 10) / 10;
  region.height = Math.round(clamp(Number(region.height) || 5, 5, 100 - region.y) * 10) / 10;
  region.zIndex = Math.round(clamp(Number(region.zIndex) || 1, 1, 4));
}

function playlistOptions(selectedId) {
  return playlists.map((playlist) => `<option value="${playlist.id}" ${playlist.id === selectedId ? "selected" : ""}>${playlist.name}</option>`).join("");
}

function renderLayoutDeviceOptions() {
  const select = document.querySelector("#layoutDevice");
  select.innerHTML = devices.map((device) => `<option value="${device.id}" ${device.id === selectedLayoutDeviceId ? "selected" : ""}>${device.name} · ${device.zone}</option>`).join("");
}

function renderLayoutEditor() {
  document.querySelector("#layoutName").value = layoutDraft.name;
  document.querySelector("#layoutEnabled").checked = layoutDraft.enabled;
  document.querySelector("#layoutAspectRatio").value = layoutDraft.aspectRatio;
  document.querySelector("#layoutRegionCount").textContent = `${layoutDraft.regions.length} / 4 영역`;
  document.querySelector("#addLayoutRegion").disabled = layoutDraft.regions.length >= 4;

  const canvas = document.querySelector("#layoutCanvas");
  canvas.style.setProperty("--layout-ratio", layoutDraft.aspectRatio.replace(":", " / "));
  canvas.classList.toggle("disabled", !layoutDraft.enabled);
  canvas.innerHTML = layoutDraft.regions.map((region, index) => {
    const playlist = playlists.find((item) => item.id === region.playlistId);
    return `<div class="layout-region ${index === selectedLayoutRegionIndex ? "selected" : ""}" data-layout-index="${index}" style="left:${region.x}%;top:${region.y}%;width:${region.width}%;height:${region.height}%;z-index:${region.zIndex};--region-color:${layoutRegionColors[index]}">
      <span class="layout-region-playlist">${playlist?.name || "미지정"}</span>
      <span class="layout-region-label">${region.name}</span>
      <span class="resize-handle" aria-label="영역 크기 조절"></span>
    </div>`;
  }).join("");

  document.querySelector("#layoutRegionEditors").innerHTML = layoutDraft.regions.map((region, index) => `<div class="layout-region-editor ${index === selectedLayoutRegionIndex ? "selected" : ""}" data-layout-index="${index}" style="--region-color:${layoutRegionColors[index]}">
    <span class="region-letter">${String.fromCharCode(65 + index)}</span>
    <label>영역명<input data-layout-field="name" value="${region.name}" maxlength="40"></label>
    <label>플레이리스트<select data-layout-field="playlistId">${playlistOptions(region.playlistId)}</select></label>
    <label>X (%)<input data-layout-field="x" type="number" min="0" max="95" step="0.1" value="${region.x}"></label>
    <label>Y (%)<input data-layout-field="y" type="number" min="0" max="95" step="0.1" value="${region.y}"></label>
    <label>너비 (%)<input data-layout-field="width" type="number" min="5" max="100" step="0.1" value="${region.width}"></label>
    <label>높이 (%)<input data-layout-field="height" type="number" min="5" max="100" step="0.1" value="${region.height}"></label>
    <label>겹침 순서<input data-layout-field="zIndex" type="number" min="1" max="4" step="1" value="${region.zIndex}"></label>
    <button type="button" class="button danger remove-region" data-remove-region ${layoutDraft.regions.length === 1 ? "disabled" : ""}>삭제</button>
  </div>`).join("");
}

function selectLayoutRegion(index) {
  selectedLayoutRegionIndex = index;
  document.querySelectorAll("[data-layout-index]").forEach((element) => {
    element.classList.toggle("selected", Number(element.dataset.layoutIndex) === index);
  });
}

function updateLayoutRegionDom(index) {
  const region = layoutDraft.regions[index];
  const element = document.querySelector(`.layout-region[data-layout-index="${index}"]`);
  if (element) {
    element.style.left = `${region.x}%`;
    element.style.top = `${region.y}%`;
    element.style.width = `${region.width}%`;
    element.style.height = `${region.height}%`;
  }
  ["x", "y", "width", "height"].forEach((field) => {
    const input = document.querySelector(`.layout-region-editor[data-layout-index="${index}"] [data-layout-field="${field}"]`);
    if (input) input.value = region[field];
  });
}

function startLayoutPointerEdit(event) {
  const regionElement = event.target.closest(".layout-region");
  if (!regionElement || !layoutDraft.enabled) return;
  event.preventDefault();
  const index = Number(regionElement.dataset.layoutIndex);
  const region = layoutDraft.regions[index];
  const bounds = document.querySelector("#layoutCanvas").getBoundingClientRect();
  const resizing = Boolean(event.target.closest(".resize-handle"));
  const start = { clientX: event.clientX, clientY: event.clientY, x: region.x, y: region.y, width: region.width, height: region.height };
  selectLayoutRegion(index);

  const move = (moveEvent) => {
    const deltaX = (moveEvent.clientX - start.clientX) / bounds.width * 100;
    const deltaY = (moveEvent.clientY - start.clientY) / bounds.height * 100;
    if (resizing) {
      region.width = clamp(start.width + deltaX, 5, 100 - region.x);
      region.height = clamp(start.height + deltaY, 5, 100 - region.y);
    } else {
      region.x = clamp(start.x + deltaX, 0, 100 - region.width);
      region.y = clamp(start.y + deltaY, 0, 100 - region.height);
    }
    normalizeRegion(region);
    updateLayoutRegionDom(index);
  };
  const stop = () => {
    document.removeEventListener("pointermove", move);
    document.removeEventListener("pointerup", stop);
  };
  document.addEventListener("pointermove", move);
  document.addEventListener("pointerup", stop, { once: true });
}

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

document.querySelector("#layoutDevice").addEventListener("change", (event) => {
  selectedLayoutDeviceId = Number(event.currentTarget.value);
  selectedLayoutRegionIndex = 0;
  layoutDraft = createOverlayLayout(devices.find((device) => device.id === selectedLayoutDeviceId));
  renderLayoutEditor();
});

document.querySelector("#layoutName").addEventListener("input", (event) => {
  layoutDraft.name = event.currentTarget.value;
});

document.querySelector("#layoutEnabled").addEventListener("change", (event) => {
  layoutDraft.enabled = event.currentTarget.checked;
  document.querySelector("#layoutCanvas").classList.toggle("disabled", !layoutDraft.enabled);
});

document.querySelector("#layoutAspectRatio").addEventListener("change", (event) => {
  layoutDraft.aspectRatio = event.currentTarget.value;
  renderLayoutEditor();
});

document.querySelector("#addLayoutRegion").addEventListener("click", () => {
  if (layoutDraft.regions.length >= 4) return;
  const index = layoutDraft.regions.length;
  const presets = [
    { x: 0, y: 0, width: 100, height: 100 },
    { x: 65, y: 0, width: 35, height: 100 },
    { x: 0, y: 70, width: 65, height: 30 },
    { x: 65, y: 65, width: 35, height: 35 },
  ];
  layoutDraft.regions.push({ name: String.fromCharCode(65 + index), playlistId: playlists[index]?.id || 1, ...presets[index], zIndex: index + 1 });
  selectedLayoutRegionIndex = index;
  renderLayoutEditor();
});

document.querySelector("#resetLayout").addEventListener("click", () => {
  layoutDraft = createSingleLayout(devices.find((device) => device.id === selectedLayoutDeviceId));
  selectedLayoutRegionIndex = 0;
  renderLayoutEditor();
});

document.querySelector("#layoutCanvas").addEventListener("pointerdown", startLayoutPointerEdit);
document.querySelector("#layoutCanvas").addEventListener("click", (event) => {
  const region = event.target.closest(".layout-region");
  if (region) selectLayoutRegion(Number(region.dataset.layoutIndex));
});

document.querySelector("#layoutRegionEditors").addEventListener("click", (event) => {
  const editor = event.target.closest(".layout-region-editor");
  if (!editor) return;
  const index = Number(editor.dataset.layoutIndex);
  if (event.target.closest("[data-remove-region]")) {
    if (layoutDraft.regions.length === 1) return;
    layoutDraft.regions.splice(index, 1);
    layoutDraft.regions.forEach((region, regionIndex) => { region.zIndex = regionIndex + 1; });
    selectedLayoutRegionIndex = Math.max(0, Math.min(index, layoutDraft.regions.length - 1));
    renderLayoutEditor();
    return;
  }
  selectLayoutRegion(index);
});

document.querySelector("#layoutRegionEditors").addEventListener("input", (event) => {
  const input = event.target.closest("[data-layout-field]");
  const editor = event.target.closest(".layout-region-editor");
  if (!input || !editor) return;
  const index = Number(editor.dataset.layoutIndex);
  const region = layoutDraft.regions[index];
  const field = input.dataset.layoutField;
  if (field === "name") region.name = input.value;
  else if (field === "playlistId") region.playlistId = Number(input.value);
  else region[field] = Number(input.value);
  normalizeRegion(region);
  const regionElement = document.querySelector(`.layout-region[data-layout-index="${index}"]`);
  if (field === "name" && regionElement) regionElement.querySelector(".layout-region-label").textContent = region.name;
  else if (field === "playlistId" && regionElement) regionElement.querySelector(".layout-region-playlist").textContent = playlists.find((playlist) => playlist.id === region.playlistId)?.name || "미지정";
  else if (field === "zIndex" && regionElement) regionElement.style.zIndex = region.zIndex;
  else updateLayoutRegionDom(index);
});

window.addEventListener("hashchange", () => activateView(location.hash.slice(1) || "overview"));

renderMedia();
renderDevices();
renderSelectOptions();
renderPlaylistList();
renderPlaylistDetail();
renderLayoutDeviceOptions();
renderLayoutEditor();
activateView(location.hash.slice(1) || "overview");

